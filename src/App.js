import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Footer />
          <Modal />
          
      </React.Fragment>
    );
  }
}

export default App;
