let total = 0
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.21
let descuento = 0
let subtotal = 0

function informarDescuento(){ 

    if (total >= 1000) {
        descuento = 100;
        alert('Su compra supera los $1000. Le corresponde un descuento de $100');
    }
    else if (total >= 500) {
        descuento = 50;
        alert('Su compra supera los $500. Le corresponde un descuento de $50');
    }
    else {
        descuento = 0;
    }  
}

function calcularSubtotal(){
    let subtotal = resta(suma(total, iva(total)), descuento);
    console.log(subtotal) 
}

class Producto {
    constructor(id, titulo, precio, stock) {
        this.id = id
        this.titulo = titulo
        this.precio = precio
    }
    obtenerId = function () {
        return this.id
    }

    obtenerTotal = function (cantidad) {
        return this.precio * cantidad
    }

    obtenerCompra = function (cantidad) {
        return {
            producto: this,
            cantidad: cantidad,
            monto: this.obtenerTotal(cantidad)
        }
    }

    añadirAlCarrito = function (cantidad) {
        cart.push(this.obtenerCompra(cantidad))
    }
}

const producto1 = new Producto(1, 'pico y manga', 100, 50)
const producto2 = new Producto(2, 'chocolate semiamargo', 200, 50)
const producto3 = new Producto(3, 'molde huevo pascuas', 150, 50)
const producto4 = new Producto(4, 'chocolate para moldear', 175, 50)
const producto5 = new Producto(5, 'molde donnuts', 50, 50)
const producto6 = new Producto(6, 'molde bombones', 60, 50)
const producto7 = new Producto(7, 'chocolate baño', 320, 50)
const producto8 = new Producto(8, 'molde bombones pascuas', 300, 50)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]
