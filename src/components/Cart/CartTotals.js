import React from 'react';
import {Link} from 'react-router-dom';

function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button 
                            className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            onClick={()=>clearCart()}
                            type="button">
                                Clear Cart
                            </button>
                        </Link>
                        <h5 className="title">
                            <span>Subtotal : </span>
                            <strong>{cartSubTotal} $</strong>
                        </h5>
                        <h5 className="title">
                            <span>Tax : </span>
                            <strong>{cartTax} $</strong>
                        </h5>
                        <h3 className="text-title">
                            <span>Total : </span>
                            <strong>{cartTotal} $</strong>
                        </h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;