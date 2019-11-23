import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div className="item col-md-4 col-sm-6">
               <br /><h3>Hello from {this.props.product.title}</h3>
            </div>
        );
    }
}

export default Product;
