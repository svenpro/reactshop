import React from 'react';
import Cart from './Cart';
import { valueToNode } from '@babel/types';

function CartItem({item,value}) {
    const {id, title, img, price, count, total} = item;
    const {increment, decrement, removeItem} = value;
    console.log(item);
    return (
        <div className="cart-item row justify-content-between">
            <div className="col-md-2">
                <p className="text-uppercase"><img height="auto" width="80px" src={img} alt="cart item img" /></p>
            </div>
            <div className="col-md-3">
                <p className="text-uppercase">{title}</p>
            </div>
            <div className="col-md-2">
                <p className="text-uppercase">{price} $</p>
            </div>
            <div className="col-md-2">
                <p className="text-uppercase">
                    <button className="cart-count-btn btn btn-secondary mr-2" title="decrement" onClick={()=>decrement(id)}>-</button> 
                    {count}
                    <button className="cart-count-btn btn btn-secondary ml-2"  title="increment" onClick={()=>increment(id)}>+</button>
                </p>
            </div>
            <div className="col-md-1">
                <p className="text-uppercase">
                    <button className="remove-from-cart btn btn-dark" title="remove" onClick={()=>removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </button>  
                </p>
            </div>
            <div className="col-md-2">
                <p className="text-uppercase">{total} $</p>
            </div>
        </div>       
    
    );
}

export default CartItem;