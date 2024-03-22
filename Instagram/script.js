
/* dar like y contador */
const ContadorLikes = document.getElementById('contador-likes');
const fotoCorazon = document.getElementById('reaccion-corazon');
const corazonSinRelleno = document.getElementById('corazon-sin-relleno')

let contador = 0;
ContadorLikes.innerHTML = contador;
let dioLike = false;

corazonSinRelleno.addEventListener("click", function(){
    if(dioLike == false){
        ContadorLikes.innerHTML= contador +=1;
        dioLike=true;
        corazonSinRelleno.style.display="none"
        fotoCorazon.style.display="block"
        fotoCorazon();
    }
})

fotoCorazon.addEventListener("click", function(){

    if(dioLike==true){
        ContadorLikes.innerHTML= contador -=1;  
        dioLike=false;
        corazonSinRelleno.style.display="block"
        fotoCorazon.style.display="none"
        corazonSinRelleno();
    }
    
});

/* seguir a la primera persona de sugerencias */ 

const botonDeSeguir1 = document.getElementById('Seguir1');
const siguiendo1 = document.getElementById('Siguiendo1');

var estaSiguiendo1 = false;

botonDeSeguir1.addEventListener("click", function(){
    if (estaSiguiendo1==false){
        estaSiguiendo1=true;
        botonDeSeguir1.style.display ="none"
        siguiendo1.style.display = "block";
    } 
    siguiendo1.addEventListener("click", function(){
        if(estaSiguiendo1==true){
            estaSiguiendo1 = false;
            botonDeSeguir1.style.display = "block";
            siguiendo1.style.display = "none";
        }
    })
})

const botonDeSeguir2 = document.getElementById('Seguir2');
const siguiendo2 = document.getElementById('Siguiendo2');

var estaSiguiendo2 = false;

botonDeSeguir2.addEventListener("click", function(){
    if (estaSiguiendo2 == false){
        estaSiguiendo2 = true;
        botonDeSeguir2.style.display = "none";
        siguiendo2.style.display = "block";
    }
    siguiendo2.addEventListener("click", function(){
        if(estaSiguiendo2==true){
            estaSiguiendo2 = false;
            botonDeSeguir2.style.display = "block";
            siguiendo2.style.display = "none";
        }
    })
})

const botonDeSeguir3 = document.getElementById('Seguir3');
const siguiendo3 = document.getElementById('Siguiendo3');

var estaSiguiendo3 = false;

botonDeSeguir3.addEventListener("click", function(){
    if (estaSiguiendo3 == false){
        estaSiguiendo3 = true;
        botonDeSeguir3.style.display = "none";
        siguiendo3.style.display = "block";
    } siguiendo3.addEventListener("click", function(){
        if(estaSiguiendo3==true){
            estaSiguiendo3 = false;
            botonDeSeguir3.style.display = "block";
            siguiendo3.style.display = "none";
        }
    })
})

/* abrir reporte en la foto */


const botonPuntitos = document.getElementById('puntitos');
const reportar = document.getElementById('reportar');
const fotoPublicacion = document.getElementById('parte-foto');
const botonCerrar = document.getElementById('cerrar-informe');

var cerrar = false;
var estaAbierto = false;


botonPuntitos.addEventListener("click", function(){
    if(estaAbierto == false){
        estaAbierto = true;
        reportar.style.display = "block";
        fotoPublicacion.style.top = '20%'; 
        cerrar=true;
        
    } else if(estaAbierto == true){
        estaAbierto = false;
        reportar.style.display="none";
        boton=false;
    } 

    botonCerrar.addEventListener("click", function(){
        if (cerrar==true){
            estaAbierto = false;
            reportar.style.display="none";
            boton=false;
        }
    })
})

const verTodasLasHistorias = document.getElementById('verTodos');
const historias = document.getElementById('historias')
estaAbierto=false;

verTodasLasHistorias.addEventListener("click", function(){

     if (estaAbierto == false){
        estaAbierto = true;
        var imagenes = historias.querySelectorAll('img');
        imagenes.forEach(function(img) {
            img.style.display = "block";
           
            // Muestra el párrafo asociado a cada imagen
            var parrafoAsociado = img.nextElementSibling; /*Llama al elemento siguiente luego del img, en este paso, la <p></p>*/
            if (parrafoAsociado.tagName.toLowerCase() === 'p' ) {
                parrafoAsociado.style.display = "flex";
            }
        });

    } else if(estaAbierto==true){
        estaAbierto=false;
        var imagenes = historias.querySelectorAll('img');
        for (let i = 3; i < imagenes.length; i++) {
            
            imagenes[i].style.display = "none";
            var parrafoAsociado = imagenes[i].nextElementSibling; 
           
            if (parrafoAsociado.tagName.toLowerCase() === 'p' ) {
                parrafoAsociado.style.display = "none";
            }
        } 
    }
})

const reporteGeneral =document.getElementById ('reportar')
const abrirReporte = document.getElementById('abrir-reporte');
const enviarReporte = document.getElementById ('enviar-reporte');
const botonEnviado = document.getElementById('reclamo-enviado')


var reporteEnviado = false;

abrirReporte.addEventListener("click", function(){

    enviarReporte.style.display="block";
    reporteGeneral.style.display="none";

})

botonEnviado.addEventListener("click", function(){
    enviarReporte.style.display="none";
    alert ("Reclamo enviado, muchas gracias.")
})




const dayMode = document.getElementById('DayMode');
const darkMode = document.getElementById('DarkMode');

dayModeActivado = true;

dayMode.addEventListener("click", function(){
   if(dayModeActivado==true){
    dayMode.style.display="none";
    darkMode.style.display="block"
    dayModeActivado= false;
    
   } else if(dayModeActivado==false) {
    dayMode.style.display="block";
    darkMode.style.display="none"
    dayModeActivado= true;
   }
})

