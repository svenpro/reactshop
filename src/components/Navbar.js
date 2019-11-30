import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import { ProductConsumer} from '../context';

class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
            {value => {
                const {cart} = value;
                return (
                    <nav className="navbar navbar-expand-sm navbar-dark px-sm5">
                        <Link to='/'>
                            <img src={logo} alt="store" className="navbar-brand" />
                        </Link>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                                <Link to="/" className="nav-link">
                                    Products
                                </Link>
                            </li>
                        </ul>
                        <Link to="/cart" className="ml-auto">
                            <button className="my-cart btn btn-primary">
                                    <i className="fas fa-shopping-basket"></i> <span className="d-none d-md-inline">My cart</span>
                                    <span className="ml-2 badge badge-light">{cart.length}</span>    
                            </button>
                        </Link>
                    </nav>
                )
        }}         
        </ProductConsumer>
           
        );
    }
}

export default Navbar;