import React, { Component } from 'react';
import {storeProducts, detailProducts} from './data'

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        products: storeProducts 
    }
    hendleDetail = () => {
        console.log('Hello from detail');
    }

    addToCart = () => {
        console.log('Product ad to cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.hendleDetail,
                    addToCart: this.addToCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
