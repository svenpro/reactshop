import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id, company, img, info, title, price,  inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={img} alt="detail product img" /> 
                                </div>
                                <div className="col-md-7">
                                    <h1 className="text-title">{title}</h1>
                                    <div className="additional-info">
                                        <span className="comany-name">Made by: {company}</span>
                                    </div>
                                    <p className="product-info">{info}</p>
                                    <p className="product-price">Price: {price} $</p>
                                    <div className="action-sectio">
                                    <button className={`${inCart ? 'btn-info' : 'btn-primary'} btn  btn-success to-cart-btn`} 
                                        onClick={() => {value.addToCart(id)}}>
                                            <i className="mr-3 fas fa-cart-plus"></i> {inCart ? 'Product in cart' : 'Add to Cart'}
                                        </button>
                                        <Link to="/">      
                                            <span className="back-to-product ml-2">Back to products</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>               
                        </div>
                    )
                }}               
            </ProductConsumer>
        );
    }
}

export default Details;