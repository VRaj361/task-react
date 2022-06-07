export const addToCart=(product)=>{
    console.log(product)
    return{
        type:"ADD",
        product:product
    }
}