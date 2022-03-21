import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 43;
    const last = 78;
    const total = add(first, last)
    return (
        <div>
            <h1>welcome to my cosmetics store</h1>
            <p>total: {total}</p>
        </div>
    );
};

export default Cosmetics;