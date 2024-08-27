import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST/ public
const paymentHandling = async (req, res, next) => {
    const { items } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: items.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: items.price * 100,
                },
                quantity: items.quantity,
            })),
            mode: "payment",
            success_url: `${proccess.env.LOCAL_URL}?success=true`,
            cancel_url: `${proccess.env.LOCAL_URL}?canceled=true`,
        });
        console.log(session);
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
};

export { paymentHandling };
