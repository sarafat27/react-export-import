import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/storage';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    const addToCart = (id) => {
        addToDb(id)
    }

    const removeFromCart = id => {
        removeFromDb(id)
    }

    // const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2>buy this: {name}</h2>
            <p>price: ${price}</p>
            <p><small>it's id is: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;