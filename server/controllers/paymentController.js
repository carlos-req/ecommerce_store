import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST/ public
const paymentHandling = async (req, res) => {
    const { items } = req.body;

    const session = await stripe.checkout.sessions.create({
        line_items: items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${process.env.LOCAL_URL}/checkout?success=true`,
        cancel_url: `${process.env.LOCAL_URL}/checkout?canceled=true`,
    });
    res.status(200).json({ url: session.url });
};

export { paymentHandling };
