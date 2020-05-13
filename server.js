const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();

// stripe secret key
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.post('/charge', (req, res) => {
    (async () => {
        try {
            const charge = await stripe.charges.create({
                amount: 5000,
                currency: 'usd',
                source: 'tok_visa',
                receipt_email: 'sureshmangs3@gmail.com',
            });
            console.log('charge is ', charge)
            res.redirect('/success')
        } catch (err) {
            console.log('Error occured ', err);
        }
    })();

})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`)
})
