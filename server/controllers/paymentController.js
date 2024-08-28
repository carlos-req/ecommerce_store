import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST/ public
const paymentHandling = async (req, res) => {
    const { items } = req.body;
    console.log(req.body);

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
        success_url: `${process.env.LOCAL_URL}?success=true`,
        cancel_url: `http://localhost:5173?canceled=true`,
    });

    // this works but probably not the best way
    //remove the redirect from the front end if you get it to work.
    //res.status(200).json(session.url);
    res.redirect(300, session.url);
};

export { paymentHandling };
