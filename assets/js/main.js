$(document).ready(function () {
    
let destinatario = $("#destinatario")
let boton = $("#boton")
let yes = $("#yes")
let no = $("#no")
let array = []
formulario = $("#formContent form")

 function enviar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             if (!array.includes(destinatario.val())) {
                array.push(destinatario.val())
                resolve(yes.removeClass("d-none"));
                 resolve(no.addClass("d-none"));
             } else {
                 reject(no.removeClass("d-none"));
                 reject(yes.addClass("d-none"));
                
             }
         }, 3000);
     });
 }


//  boton.on("click", enviar)


function validar(destinatario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.includes(destinatario)) {
                reject("Ya has enviado un mensaje, no puedes enviar otro!")
                
            } else {
                resolve("Mensaje Enviado!")
                
                
            }
        }, 3000);
    });
}

formulario.on("submit", (event) =>{
    event.preventDefault()
    let destinatarioValor = destinatario.val()
    
    validar(destinatarioValor)
    
   .then((respuesta) =>{
    array.push(destinatarioValor)
    yes.text(respuesta)
    yes.removeClass("d-none")
    no.addClass("d-none")
   })
   .catch((error) =>{
    no.text(error)
    no.removeClass("d-none")
    yes.addClass("d-none")

   })
})

});