import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">TheBand</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/Band">Band</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/Tour">Tour</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
