let mybutton = document.getElementById("button-foot");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  let nombre = document.getElementById('nombre').value;
  console.log('nombre');

  let email = document.getElementById('email');
  console.log('email');

  let mensaje = document.getElementById('mensaje');
  console.log('mensaje');

  document.getElementById("enviar").addEventListener("click",function(){
  let visitante = document.getElementById('nombre').value;
  // para ir viendo si la cosa marcha bien se pueden agregar console.logs
  console.log(' Gracias ' + visitante + ' por tu mensaje!');

  document.getElementById('respuesta-auto').innerHTML = (visitante + ", gracias por tu mensaje!");
  document.getElementById('respuesta-auto').style.display = "block";

})