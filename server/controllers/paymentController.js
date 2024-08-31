import Stripe from "stripe";
import OrderModel from "../models/orderModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST /public
const createCheckoutSession = async (req, res) => {
    try {
        const { products } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res
                .status(400)
                .json({ error: "Invalid or empty products array" });
        }

        let totalAmount = 0;

        const lineItems = products.map((product) => {
            const amount = Math.round(product.price * 100);
            totalAmount += amount * product.quantity;

            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                        images: [product.imageSrc],
                    },
                    unit_amount: amount,
                },
                quantity: product.quantity || 1,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/checkout?canceled=true`,
            metadata: {
                userId: req.user._id.toString(),
                items: JSON.stringify(
                    items.map((product) => ({
                        id: product._id,
                        quantity: product.quantity,
                        price: product.price,
                    }))
                ),
            },
        });
        res.status(200).json({
            id: session.id,
            totalAmount: totalAmount / 100,
        });
    } catch (error) {
        console.error("Error processing checkout:", error);
        res.status(500).json({
            message: "Error processing checkout",
            error: error.message,
        });
    }
};

const checkoutSuccess = async (req, res) => {
    try {
        const { session_id } = req.body;
        const session = await stripe.checkout.sessions.retrieve(session_id);

        // new order
        const products = JSON.parse(session.metadata.products);
        const newOrder = new OrderModel({
            user: session.metadata.userId,
            products: products.map((product) => ({
                product: product.id,
                quantity: product.quantity,
                price: product.price,
            })),
            totalAmount: session.amount_total / 100, // convert from cents to dollars,
            stripeSessionId: sessionId,
        });

        await newOrder.save();

        res.status(200).json({
            success: true,
            message:
                "Payment successful, order created, and coupon deactivated if used.",
            orderId: newOrder._id,
        });
    } catch (error) {
        console.error("Error processing successful checkout:", error);
        res.status(500).json({
            message: "Error processing successful checkout",
            error: error.message,
        });
    }
};

export { createCheckoutSession, checkoutSuccess };
