import React from 'react';
import CartItem from './CartItem'

function CartList({value}) {
    const {cart} = value;
    
    return (
        <div className="container-fluid text-center pr-4 pl-4">
                {cart.map(item=>{
                    return <CartItem key={item.id} item={item} value={value}/>
                })}
        </div>
    );
}

export default CartList;