const check = document.getElementById("check-nav");
const enlaces = document.getElementById("lista-enlaces");

//Función para ocultar y mostrar los enlaces del navbar (celular)
function comprobarCheck(){
    if(check.checked){
        enlaces.style.left = "30%";
        enlaces.style.boxShadow = "-5px 16px 20px rgba(0,0,0,0.25)";
    }else{
        enlaces.style.left = "100%";
        enlaces.style.boxShadow = "none";
    }
}

//Agregamos el evento
check.addEventListener("change", comprobarCheck);


// Descarmar Check cuando se recarga la página o se redimensiona
window.addEventListener('load', function() { //Evento al cargar página

    function desmarcarCheckbox() {
        if (window.innerWidth > 767) {
            check.checked = false;
            comprobarCheck();
        }
    }
    this.addEventListener('resize', desmarcarCheckbox); //Evento al redimensionar página
    desmarcarCheckbox();
  });