const add = (first, last) => first + last;
const multiply = (first, last) => first * last;

/* usage of reduce in array
const numbers = [34, 87, 65, 90, 52]
const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0)
 */

/* usage of reduce in array of objects
const items = [
    { id: 1, name: 'body spray', price: 100 },
    { id: 2, name: 'body spray', price: 100 },
    { id: 3, name: 'body spray', price: 100 },
    { id: 4, name: 'body spray', price: 100 },
    { id: 5, name: 'body spray', price: 100 }
]

const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0) 
*/

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;
}

export {
    add,
    multiply,
    getTotalPrice as getTotal
};