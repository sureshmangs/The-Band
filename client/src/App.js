import React, { Component } from 'react'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Member from './components/Member';
import Ticket from './components/Ticket';
import Footer from './components/Footer';

class App extends Component {
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

export default App
