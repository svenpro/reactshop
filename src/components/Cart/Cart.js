import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';

class Cart extends Component {
    render() {
        return (
            <section className="mt-5">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Cart" />
                                    <CartColumns />
                                </React.Fragment>
                            )
                        }
                        return (
                            <EmptyCart /> 
                        )
                    }}
                </ProductConsumer>
              
            </section>
        );
    }
}

export default Cart;