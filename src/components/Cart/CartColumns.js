import React, { Component } from 'react';


class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center pr-4 pl-4">
                <div className="row justify-content-between">
                    <div className="cart-title col-md-2">
                        <p className="text-uppercase">Products</p>
                    </div>
                    <div className="cart-title col-md-3">
                        <p className="text-uppercase">Name</p>
                    </div>
                    <div className="cart-title col-md-2">
                        <p className="text-uppercase">Price</p>
                    </div>
                    <div className="cart-title col-md-2">
                        <p className="text-uppercase">Qty</p>
                    </div>
                    <div className="cart-title col-md-1">
                        <p className="text-uppercase">Remove</p>
                    </div>
                    <div className="cart-title col-md-2">
                        <p className="text-uppercase">Total</p>
                    </div>
                </div>       
            </div>
        );
    }
}

export default CartColumns;