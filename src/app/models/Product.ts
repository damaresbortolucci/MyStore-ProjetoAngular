export default class Product {
  static lastId: number = 9;

  id: number;
  title: string;
  image?: string;
  description?: string;
  price?: number;
  quantity: number;
  status: boolean;


  constructor(title: string, image?: string, descr?: string, price?: number, quantity: number = 1, status: boolean = false) {
    this.title = title;
    this.image = image;
    this.description = descr;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
    this.id = Product.updateLastId();
  }

  static updateLastId(id?: number): number {
    return ++this.lastId;
  }
}
