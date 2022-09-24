const addToLS=(id)=> {
    let shoppingCart={};

    //- get already exist data from local storage
    // if data exist then JSON.parse the data
    // if dosen't exist then it will be an empty object which is initial value
    const alreadyExistData = localStorage.getItem('shopping-cart')
    if (alreadyExistData) {
        shoppingCart=JSON.parse(alreadyExistData)
    }

    //- get quantity value by id
    // if value exist then add 1 with the existing value and set to shoppingCart id value as it it
    // if dosen't exist then place 1 as the valued of shoppingCart id
    const quantity=shoppingCart[id]
    if (quantity) {
        const newQuantity=quantity+1
        shoppingCart[id]=newQuantity
    }
    else{
        shoppingCart[id]=1
    }

    // - at last add shopping-cart as key AND shoppingCart as vlaue
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
};


const removeFromLs=(id)=>{
    //- get shopping-cart value and check if it is exist
    // if exist then parse the data 
    // check the specific data is exist on the whole data
    // if exist then delete it and update data using localStorage.setItem
    const alreadyExistData=localStorage.getItem('shopping-cart')
    if (alreadyExistData) {
        const existingData=JSON.parse(alreadyExistData)
        if (id in existingData) {
        delete existingData[id]
        localStorage.setItem('shopping-cart', JSON.stringify(existingData))
        }      
    }
}
export { addToLS, removeFromLs };

