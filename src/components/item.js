import  uuid  from "uuid";
class Item { 
    constructor(name,product,price) { 
        this.name = name;
        this.product = product;
        this.price = price;
        this.id = uuid();
    }
}

export default Item;