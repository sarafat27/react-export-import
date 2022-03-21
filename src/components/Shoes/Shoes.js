import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 500;
    const last = 4;
    const total = multiply(first, last)
    const sum = add(first, last);
    return (
        <div>
            <h3>This is shoes component</h3>
            <p>total: {total}</p>
            <p>sum: {sum}</p>
        </div>
    );
};

export default Shoes;