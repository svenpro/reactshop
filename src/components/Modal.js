import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {id, img, title, price, shortInfo, inCart} = value.modalProduct;

                    if (modalOpen) {
                        return (                
                            <div id={`modal-${id}`} className="modal product-modal fade show" tabIndex="-1" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content p-4">
                                        <button onClick={() => {closeModal();}} className="close-modal close">+</button>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img src={img} alt="detail img-fluid product img" /> 
                                            </div>
                                            <div className="col-md-12">
                                                <h1 className="text-title">{title}</h1>
                                                <p className="product-info">{shortInfo}</p>
                                                <p className="product-price">Price: {price} $</p>
                                            <div className="action-section justify-content-between">
                                                <button className="col-sm-6 btn btn-success to-cart-btn mb-3" onClick={() => {closeModal();}}>
                                                        Back to shoping 
                                                </button>
                                                <Link to="/cart" className="col-sm-6"> 
                                                    <button className="btn-primary btn to-cart-btn" onClick={() => {closeModal();}}>
                                                            Go to cart
                                                    </button>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        )
                    }                  
                }}
            </ProductConsumer>
            
        );
    }
}

export default Modal;