import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Ticket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {
                name: 'The Band Ticket',
                price: 1000,
                prodDesc: 'The Official Ticket of The Band Night'
            },
            paySuccess: false,
            payFailure: false
        }
    }

    makePayment = token => {
        const product = this.state.product;
        const body = {
            token,
            product
        }
        axios.post('/payment', body)
            .then((response) => {
                this.setState({
                    paySuccess: true
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.paySuccess) {
            return <Redirect to='/success' />;
        }
        if (this.state.payFailure) {
            return <Redirect to='/failure' />;
        }
        return (
            <div>
                <section className="bg-primary text-center text-white mt-5">
                    <article className="pt-5 pb-5">
                        <div>
                            <h3 className="display-4 mb-3">Buy Tickets</h3>
                            <p className="mb-2">Music is Life</p>

                            <br />
                            <button type="button" className="badge badge-danger mb-3" data-toggle="modal" data-target="#exampleModalCenter">Test Payment Gateway</button>


                            <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body text-dark">
                                            <h3>Test Payment Gateway</h3>
                                            <p>Email: Valid Email</p>
                                            <p>City: Delhi</p>
                                            <p>Postcode: 110001</p>
                                            <p>Card number: 4242 4242 4242 4242</p>
                                            <p>MM/YY: Valid Date</p>
                                            <p>CSV: 123</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <StripeCheckout
                                stripeKey={process.env.REACT_APP_STRIPE_PS_KEY}
                                token={this.makePayment}
                                name={this.state.product.name}
                                currency="INR"
                                billingAddress={true}
                                amount={this.state.product.price * 100} >
                                <button className="btn btn-large btn-warning ">Buy Ticket ₹ {this.state.product.price}</button>
                            </StripeCheckout>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default Ticket
