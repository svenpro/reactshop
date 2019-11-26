import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

class Navbar extends Component {
    render() {
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
                        <i className="fas fa-shopping-basket"></i> My cart
                        <span className="ml-2 badge badge-light">2</span>    
                   </button>
                </Link>
           </nav>
        );
    }
}

export default Navbar;