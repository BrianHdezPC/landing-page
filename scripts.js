  //Script para generar botón "ir arriba". Primero activa el botón:
  var topbutton = document.getElementById("topBtn");

  // Cuando el usuario haya descendido al menos 300px desde el inicio, sale button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topbutton.style.display = "block";
    } else {
    topbutton.style.display = "none";
    }
  }

  // Cuando el usuario clica el botón, envía al inicio
  function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
  }
// -----------------------------------------------------------------------------

// Menú adaptativo según viewport como apps en celulares
function menuMovil() {
  var x = document.getElementById("mylinks");
  if (x.className === "links") {
    x.className += "responsive";
  } else {
    x.className = "links";
  }
}

// Cerrar menú
function cerrar() {
  var y = document.getElementById("mylinks");
  if (y.className === "responsive") {
    y.className -= "responsive";
  } else {
    y.className = "links";
  }
}

//-----------------------------------------------------------------------------

// JS para evento click galería -------------------------------------->
var ImagenProducto = document.getElementById("imglocal");
var ImagenGaleria = document.getElementsByClassName("img-gallery");

ImagenGaleria[0].onclick = function() {
    imglocal.src = ImagenGaleria[0].src;
}

ImagenGaleria[1].onclick = function() {
    imglocal.src = ImagenGaleria[1].src;
}
ImagenGaleria[2].onclick = function() {
    imglocal.src = ImagenGaleria[2].src;
}
ImagenGaleria[3].onclick = function() {
    imglocal.src = ImagenGaleria[3].src;
}
ImagenGaleria[4].onclick = function() {
    imglocal.src = ImagenGaleria[4].src;
}
ImagenGaleria[5].onclick = function() {
    imglocal.src = ImagenGaleria[5].src;
}
ImagenGaleria[6].onclick = function() {
    imglocal.src = ImagenGaleria[6].src;
}
ImagenGaleria[7].onclick = function() {
    imglocal.src = ImagenGaleria[7].src;
}
ImagenGaleria[8].onclick = function() {
    imglocal.src = ImagenGaleria[8].src;
}
ImagenGaleria[9].onclick = function() {
    imglocal.src = ImagenGaleria[9].src;
}
ImagenGaleria[10].onclick = function() {
    imglocal.src = ImagenGaleria[10].src;
}
ImagenGaleria[11].onclick = function() {
    imglocal.src = ImagenGaleria[11].src;
}
ImagenGaleria[12].onclick = function() {
    imglocal.src = ImagenGaleria[12].src;
}
ImagenGaleria[13].onclick = function() {
    imglocal.src = ImagenGaleria[13].src;
}

// -----------------Termina galería -------------------------------------------

// ---- permite ejecutar la función presionando la tecla enter ----------------
var input = document.getElementById("email");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("submit").click();
}
});

// -----------------Termina click onkeypress -------------------------------------------
