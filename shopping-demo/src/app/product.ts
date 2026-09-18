export class Product{
    id: number;
    productName: string;
    price: number;
    productDesc: string;
   
    constructor(id:number = 0, productName: string = '', price:number=0, productDesc: string = ''){
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.productDesc = productDesc;
    }

}