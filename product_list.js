class ProductList{
    constructor(host){
        this._host = host;
        this._list;
        this.init();
    }
    init = ()=>{
        this._list = document.createElement("div");
        this._list.classList.add(".product-list");
        this._host.appendChild(this._list);
        this._list.addEventListener('click',(e)=>{
            console.log(e.target);
            this._list.removeChild(e.target);
        })
    }
    add = (product)=>{
        this._list.appendChild(product.html());
    }
}
export {ProductList};