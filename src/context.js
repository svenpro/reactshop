import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct, 
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    };
    
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleitem = {...item};   
            tempProducts = [...tempProducts, singleitem];
        }) 
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product
    }

    hendleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = product.total + price;
        this.setState(() => { 
            return {products:tempProducts, cart: [...this.state.cart, product]};
        });
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        });
    };

    closeModal = () => {
        this.setState(() => {
            return {modalOpen:false}
        });    
    }

    increment = (id) => {
        console.log('this is increment');
    }

    decrement = (id) => {
        console.log('this is decrement');
    }

    removeItem = (id) => {
        console.log('this is remove item');
    }

    clearCart = () => {
        console.log('cart was clear');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.hendleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    };
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
