interface Product {
    title:string,
    price: number,
    details: string,
    imageurl: string,
    data_register: string
}

class Product {
    title:string;
    price: number;
    details: string;
    imageurl: string;
    data_register: string;

    constructor(title:string, price:number, details:string, imageurl:string, data_register:string){
        this.title= title;
        this.price = price;
        this.details = details;
        this.imageurl = imageurl;
        this.data_register = data_register;
    }
}

export default Product;