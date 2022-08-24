import React from 'react';
import{BsFillCartFill} from 'react-icons/bs'
const Cart = () => {
    return (
        <button>
            <span className='icon'><BsFillCartFill /></span>
            <span>Your Cart</span>
            <span className='badge'>x</span>
            
        </button>
    );
}

export default Cart;
