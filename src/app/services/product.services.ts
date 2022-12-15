import { Injectable } from '@angular/core';

import Product from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

productList: Product[] = [
    {
      id: 1,
      title: "Mouse Microsoft óptico",
      description: "Mouse óptico usb Basic PT MFT P58-00061 Microsoft",
      price: 69.90,
      quantity: 5,
      status: false,
      image: "https://http2.mlstatic.com/D_NQ_NP_834929-MLA44559573666_012021-O.jpg"
    },
    {
      id: 2,
      title: "Teclado Microsoft",
      description: "Teclado usb Desktop 600 PT MFT ANB-00005 Microsoft",
      price: 119.90, 
      quantity: 2,
      status: false,
      image: "https://img.kalunga.com.br/fotosdeprodutos/671903d.jpg"
    },
    {
      id: 3,
      title: "Monitor Samsung Full HD T350 ",
      description: "Monitor Full HD Samsung T350 LF24T350FHLMZD - 24” IPS LED HDMI VGA FreeSync",
      price: 250.00,
      quantity: 6,
      status: false,
      image: "https://a-static.mlcdn.com.br/800x560/monitor-full-hd-samsung-t350-lf24t350fhlmzd-24-ips-led-hdmi-vga-freesync/magazineluiza/232118400/6095909a0b275c676c865ce29b074993.jpg"
    },
    {
      id: 4,
      title: "Notebook Asus E410MA-BV1871",
      description: "Notebook Asus E410MA-BV1871 Intel Celeron N4020 14 4GB SSD 128 GB Linux Touchpad Numérico",
      price: 1599.00,
      quantity: 3,
      status: false,
      image: "https://i.zst.com.br/thumbs/12/36/1a/-796769806.jpg"
    },
    {
      id: 5,
      title: "Headset Logitech G",
      description: "Headset Gamer P2 7.1 G432 981-000769 Logitech G ",
      price: 398.99,
      quantity: 4,
      status: false,
      image: "https://img.kalunga.com.br/fotosdeprodutos/229289d.jpg"
    },
    {
      id: 6,
      title:"Webcam Logitech",
      description: "Câmera web Logitech C922 Pro Full HD 30FPS cor preto",
      price: 90.00,
      quantity: 5,
      status: false,
      image: "https://http2.mlstatic.com/D_NQ_NP_924907-MLA52231786166_112022-O.webp"
    },
    {
      id: 7,
      title: "Smartphone Samsung Galaxy S10",
      description: "Smartphone Samsung Galaxy S10 128GB Branco 4G - 8GB RAM Tela 6,1” Câm. Tripla + Câm. Selfie 10MP",
      price: 4999.00,
      quantity: 2,
      status: false,
      image: "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s10-128gb-branco-4g-8gb-ram-tela-61-cam-tripla-cam-selfie-10mp/magazineluiza/155550800/ae24f4f7711a93d36e3c2883ca2fb142.jpg"
    },
    {
      id: 8,
      title: "Mousepad Multilaser",
      description: " Mousepad Multilaser com Apoio de Pulso - AC021",
      price: 19.99,
      quantity: 0,
      status: false,
      image: "https://images.kabum.com.br/produtos/fotos/66308/66308_index_gg.jpg"
    },
    {
      id: 9,
      title: "Go Pro Hero 10 ",
      description: "Gopro Hero 10 Black À Prova De Água 5,3k 23mp Wi-Fi Bluetooth Hypersmooth 4.0",
      price: 2949.00,
      quantity: 10,
      status: false,
      image: "https://static.gopro.com/assets/blta2b8522e5372af40/blt741c2a686796c4bf/61b7c3bf1bdbe25709ba76a9/GoPro_News_HERO10_Black.jpg"
    },
    {
      id: 10,
      title: "Cadeira Gamer XT Racer",
      description: "Cadeira Gamer XT Racer Reclinável Giratória - Preta Platinum W Series",
      price: 1469.99,
      quantity: 2,
      status: false,
      image: "https://a-static.mlcdn.com.br/800x560/cadeira-gamer-xt-racer-reclinavel-giratoria-preta-platinum-w-series/magazineluiza/225508500/7e722a70bce5446135ccc95881e8e5a1.jpg"
    },
    {
      id: 11,
      title: "Cadeira Gamer FOX Racer",
      description: "Cadeira Gamer FOX Racer RGB Preta com Iluminação (Led)",
      price: 1099.00,
      quantity: 4,
      status: false,
      image: "https://imgs.casasbahia.com.br/1511278353/1xg.jpg"
    },
    {
      id: 12,
      title: "Capa Teclado Slim",
      description: "Capa Teclado Slim Tab S8+ / S7 FE Preta",
      price: 1259.00,
      quantity: 10,
      status: false,
      image: "https://samsungbr.vtexassets.com/arquivos/ids/336746-1200-auto?v=637874016496200000&width=1200&height=auto&aspect=true"
    }
];

  constructor() {
  }

  getProducts(): Product[] {
    return this.productList;
  }

  postProduct(newTask: Product): void {
    this.productList.push(newTask);
  }

  updateProduct(id: number, updatedProduct: Product) {
    const index = this.productList.findIndex((product)=> product.id == id);
    this.productList[index] = updatedProduct;
  }

  deleteProduct(id: number) {
    const index = this.productList.findIndex((product)=> product.id == id);
    this.productList.splice(index, 1);
  }
}
