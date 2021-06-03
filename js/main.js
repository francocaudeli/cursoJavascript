let captcha = "AbC"
let verificacionCaptcha = prompt("Por favor, a continuación escriba el siguiente captcha: AbC")


if (verificacionCaptcha === captcha) {
    alert("Correcto. Usted no es un robot")
    let edad = Number(prompt("Ingrese su edad, por favor"))
    if (edad >=18) {
        alert("Hola, usted puede entrar a este sitio")
        if (edad < 70) {
            alert("Además, usted puede comprar aquí bebidas energizantes")
        }
        else {
            alert("PERO NO va a poder comprar bebidas energizantes")
        }
    } else {
        alert("Lo siento, este sitio de venta de bebidas alcohólicas y energizantes es sólo para mayores de edad")
    }    
} else {
    alert("Captcha incorrecto! GAME OVER")
}




