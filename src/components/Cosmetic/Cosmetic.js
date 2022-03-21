import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    return (
        <div>
            <h2>buy this: {name}</h2>
            <p>price: ${price}</p>
            <p><small>it's id is: {id}</small></p>
        </div>
    );
};

export default Cosmetic;