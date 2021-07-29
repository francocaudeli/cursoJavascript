const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');
  


$( "#procesar-compra" ).click(function() {
  let listcarrito=compra.obtenerProductosLocalStorage()
  let pedido="No hay productos";
  
  
  
  
  let data={
      destinatario:'Franco',
      pedido: pedido
   };
  emailjs.init("user_SSKGZr6BrmtKNprpM75gM");
  emailjs.send("service_72pla7h","template_g964f9v", data)
                        .then(function(response) {
                            if(response.text === 'OK'){
                                alert('El correo se ha enviado de forma exitosa');
                            }
                           console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        }, function(err) {
                            alert('Ocurrió un problema al enviar el correo');
                           console.log("FAILED. error=", err);
                        });

});

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

   // procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra() {

    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno'
         }).then(function () {
            window.location = "index.html";
        })
    }else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos'
          })
    }
    else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';
        enviado.src = 'img/mail.gif';
        enviado.style.display = 'block';    
        enviado.width = '150';
        
        const enviado = document.createElement('img');
            
        setTimeout(() => {
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
            enviado.remove();    
            compra.vaciarLocalStorage();
            window.location = "index.html";
            }, 2000);   
        }, 3000);                

    }
 
    
}

