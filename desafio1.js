
/* Constructor Product Manager */

class ProductManager {
    constructor() {
        this.products = []
    }
    /* Agregar productos */
    addProduct(product) {
        /* Validación de producto existente */
        if (this.products.find(producto => producto.code == product.code)) {
            return "Producto existente"
        } else {
            this.products.push(product)
            
        }
    }
    /* Obtener productos */
    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(producto => producto.id == id)

        if (product) {
            return product
        }

        return "Not Found"
    }


}
/* Constructor Product */
class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }
    /* Incrementador de product.id */
    static incrementID() {
        if (this.idIncrement) { /* si existe incrementa para nuevo producto */
            this.idIncrement++
        } else {
            this.idIncrement = 1 /* si no existe le asigna 1 */
        }
        return this.idIncrement
    }
}
/* productos harcodeados */
const product1 = new Product("Arroz", "Arroz", 150, "Sin Imagen", "A123", 20)
const product2 = new Product("Fideos", "Fideos", 250, "Sin Imagen", "F123", 10)
const product3 = new Product("Azucar", "Azucar", 320, "Sin Imagen", "A456", 30)
const product4 = new Product("Te", "Te", 120, "Sin Imagen", "T123", 40)


const productManager = new ProductManager()
productManager.addProduct(product1)
productManager.addProduct(product2)
productManager.addProduct(product3)
productManager.addProduct(product4)

console.log("Agregado de producto 1 ya existente .............",productManager.addProduct(product1))
console.log("Producto ID 2.............",productManager.getProductById(2))
console.log("Producto ID 5.............",productManager.getProductById(5))
console.log("Productos.................", productManager.getProducts())