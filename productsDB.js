import Product from "./product.js";

class ProductDB{
    constructor(){
        this._products = [new Product("xiaomi","125"),new Product("iphon 14","1050"),new Product("samsung","275"),];
    }
    add = (product)=>{
        this._products.push(product)
    }
    get = ()=>{
        return this._products;
    }
}
export default new ProductDB();
