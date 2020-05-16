import React, { Component } from 'react'

import Navbar from './Navbar';
import Home from './Home';
import Member from './Member';
import Ticket from './Ticket';
import Footer from './Footer';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <Member />
                <Ticket />
                <Footer />
            </div>
        )
    }
}

export default Main
