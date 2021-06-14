pedirNombre();
calcularMontoTotal();

function pedirNombre(){
    let nombreIngresado   = prompt("Ingresar nombre");
    alert("Hola " + nombreIngresado + " ! Bienvenido a nuestra tienda online");
    return nombreIngresado;
} 

function calcularMontoTotal(){
    let precioTotal = 0
    let cantidadProductos = Number(prompt('Cuantos productos quiere llevar?'));
    let i=1;
    while (i<=cantidadProductos) {
        let precioProducto = Number(prompt('Ingresa el precio del producto nº '+ i + ':')); 
        precioTotal = precioTotal + precioProducto;
        i++;
    }
    alert('Su total es de: $' + precioTotal);

    const suma  = (a,b) => a + b;
    const resta = (a,b) => a - b;
    const iva   = x => x * 0.21;
    let descuento; 
    if (precioTotal >= 1000) {
        descuento = 100;
        alert('Su compra supera los $1000. Le corresponde un descuento de $100');
    }
    else if (precioTotal >= 500) {
        descuento = 50;
        alert('Su compra supera los $500. Le corresponde un descuento de $50');
    }
    else {
        descuento = 0;
    }  

    let nuevoPrecio = resta(suma(precioTotal, iva(precioTotal)), descuento); 
    alert('Su subtotal con IVA incluido es de: $' + nuevoPrecio);
}

