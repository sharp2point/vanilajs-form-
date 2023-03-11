export default class Product{
    constructor(name,price){
        this._name = name;
        this._price = price;
    }
    get name (){
        return this._name;
    }
    get price(){
        return this._price;
    }
    html(){
        const productElement = document.createElement('div');
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${this.name}</h3>
            <p>${this.price} $</p>
        `
        return productElement;
    }
}