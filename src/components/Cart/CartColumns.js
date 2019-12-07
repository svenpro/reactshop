import React, { Component } from 'react';


class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center pr-4 pl-4">
                <div className="row justify-content-between">
                    <div className="cart-title col-md-2">
                        <strong className="text-uppercase">Products</strong>
                    </div>
                    <div className="cart-title col-md-3">
                        <strong className="text-uppercase">Name</strong>
                    </div>
                    <div className="cart-title col-md-2">
                        <strong className="text-uppercase">Price</strong>
                    </div>
                    <div className="cart-title col-md-2">
                        <strong className="text-uppercase">Qty</strong>
                    </div>
                    <div className="cart-title col-md-1">
                        <strong className="text-uppercase">Remove</strong>
                    </div>
                    <div className="cart-title col-md-2">
                        <strong className="text-uppercase">Total</strong>
                    </div>
                </div>       
            </div>
        );
    }
}

export default CartColumns;