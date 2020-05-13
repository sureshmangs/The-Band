import React, { Component } from 'react'

class Ticket extends Component {
    render() {
        return (
            <div>
                <section className="bg-primary text-center text-white mt-5">
                    <article className="pt-5 pb-5">
                        <div>
                            <h3 className="display-4 mb-3">Buy Tickets</h3>
                            <p className="mb-2">Music is Life</p>
                            <code
                                className="text-dark">Test Payment Gateway: Card number: 4242 4242 4242 4242  CSV: 123  ZIP: 123456 </code>

                            <form className="mt-5" action="/charge" method="POST">
                                <script src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                                    data-key="pk_test_0Tt411ql3F2Kyv5cBVi9qcBM00Di8OsAcF" data-amount="5000" data-name="Stripe.com"
                                    data-description="The Band Ticket"
                                    data-image="https://stripe.com/img/documentation/checkout/marketplace.png" data-locale="auto"
                                    data-zip-code="true">
                                </script>
                            </form>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default Ticket
