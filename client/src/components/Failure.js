import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Failure extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div>
                        <h1 className="text-center pt-5">The Band</h1>
                        <hr className="w-25 mx-auto pb-5" />
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <img src={require('../images/img_band_la.jpg')} alt="Newyork" className="img-fluid " />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <h1 className="pt-3">Sorry</h1>
                            <hr className="w-25" />
                            <p>Your payment has been unsuccessfull</p>
                            <p>We regret for your inconvinence</p>
                            <Link className="btn bg-primary text-white" to="/">Book Ticket</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Failure
