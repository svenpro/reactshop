import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer} from '../context';
import {PropTypes} from 'prop-types';


class Product extends Component {
    render() {
        const {id, title, img, price, shortInfo, inCart} = this.props.product;
        return (
            <div className="item col-lg-3 col-md-4 col-sm-6">
                    <ProductConsumer>
                        {value => (
                            <div className="inner-product-wp">
                                <div className="image-container p5" onClick={() => {value.handleDetail(id)}}>
                                    <h3>You just added to cart a pro</h3>
                                    <Link to="/details">       
                                        <img src={img} alt="product img" className="card-img-top"/>
                                        <h3 className="product-title">{title}</h3>
                                    </Link>
                                </div>
                                <div className="product-detail item-top-content-inner">
                                    <p className="info">{shortInfo}</p>
                                    <p className="row">
                                        <span className="ProductPrice col-12 text-right">Price: {price} $</span>
                                    </p>
                                    <div className="actio-wrapper text-right">
                                        <button className={`${inCart ? 'btn-info' : 'btn-primary'} btn  btn-success to-cart-btn`} 
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>  
                                            <i className="mr-3 fas fa-cart-plus"></i> {inCart ? 'Product in cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                </div>
                            </div> 
                        )}
                    </ProductConsumer> 
            </div>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
        company:PropTypes.string,
        shortInfo:PropTypes.string,
    }).isRequired
}

export default Product;
 