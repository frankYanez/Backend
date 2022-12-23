class ProductManager {
  static idProduct = 0;
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const newEvent = {
      id: ProductManager.idProduct++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    
    if (newEvent.title  === "") {
      console.log("Por favor llene todos los campos");
    } else {
      this.products.push(newEvent);
    }
  }

  getProductsById(id) {
    const finding = this.products.find((item) => item.id === id);
    if (!finding) {
      console.log("Not Found");
    }else{
      console.log('Ya existe un evento con este ID' )
    }
  }

  getProducts() {
    return this.products;
  }
}


const productManager = new ProductManager

productManager.addProduct('Lavandina suelta', 'Lavandina concentrada de la mejor calidad', 100, 'img.url', 2521534, 10)

productManager.getProducts()
productManager.getProductsById(5)