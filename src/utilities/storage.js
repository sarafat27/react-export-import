//use local storage to save data
const addToDb = id => {
    const quantity = localStorage.getItem(id)
    if (quantity) {
        console.log('already exist')
        const newQuantity = +quantity + 1;
        localStorage.setItem(id, newQuantity)
    }
    else {
        localStorage.setItem(id, 1)
    }
}

export { addToDb }