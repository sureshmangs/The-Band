const express = require('express');
const cors = require("cors");
const { uuid } = require('uuidv4');
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SC_KEY);
const app = express();

const env = process.env.NODE_ENV || 'development';
console.log('env is ', env);

app.use(express.json());
app.use(cors());

app.post('/payment', (req, res) => {
    const { product, token } = req.body;
    const idempotencyKey = uuid()

    try {
        return stripe.customers.create({
            email: token.email,
            source: token.id
        }).then(customer => {
            stripe.charges.create({
                amount: product.price * 100,
                currency: 'INR',
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchase of ${product.name}`,
            }, { idempotencyKey })
        }).then((result) => {
            res.status(200).json({
                "success": true
            })
        })
            .catch(err => console.log('error occured ', err))
    } catch (err) {
        console.log('error is ', err)
    }

})

if (env !== 'development' && app.use(express.static(path.join(__dirname, './client/build')))) {
    console.log('in client build')
}


if (env !== 'development' && app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + './client/build/index.html'));
})) {
    console.log('getting files from static build')
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`)
})
