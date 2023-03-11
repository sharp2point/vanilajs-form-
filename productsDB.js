class ProductDB{
    constructor(){
        this._products = [];
    }
    add = (product)=>{
        this._products.push(product)
    }
    get = ()=>{
        return this._products;
    }
}
export default new ProductDB();
