import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Member extends Component {
    render() {
        return (
            <div>
                <section className="container">
                    <div>
                        <h1 className="text-center pt-5">Members</h1>
                        <hr className="w-25 mx-auto pb-5" />
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="card">
                                <img className="card-img-top img-fluid" src={require('../images/img_bandmember.jpg')} alt="Member" />
                                <div className="card-body">
                                    <h4 className="card-title">John</h4>
                                    <p className="card-text">John is the smartest</p>
                                    <Link to="/" className="btn btn-primary disabled">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="card">
                                <img className="card-img-top img-fluid" src={require('../images/img_bandmember.jpg')} alt="Member" />
                                <div className="card-body">
                                    <h4 className="card-title">Paul</h4>
                                    <p className="card-text">Paul is the prettiest</p>
                                    <Link to="/" className="btn btn-primary disabled">See Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="card">
                                <img className="card-img-top img-fluid" src={require('../images/img_bandmember.jpg')} alt="Member" />
                                <div className="card-body">
                                    <h4 className="card-title">Ringo</h4>
                                    <p className="card-text">Ringo is the funniest</p>
                                    <Link to='/' className="btn btn-primary disabled">See Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Member
