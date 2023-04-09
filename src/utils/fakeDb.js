const setToBd = id =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart)
    {
        shoppingCart = JSON.parse(storedCart)
    }

    let quantity = shoppingCart[id];
    if(quantity){
        let newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getFromDb = () =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}
export {setToBd, getFromDb}