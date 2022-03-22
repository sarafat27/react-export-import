import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import { deleteShoppingCart } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>welcome to my cosmetics store</h1>
            <p>Total price: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
            <button onClick={deleteShoppingCart}>Delete shopping cart</button>

        </div>
    );
};

export default Cosmetics;