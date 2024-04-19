document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#contact-form input[type="text"]').value;
    const email = document.querySelector('#contact-form input[type="email"]').value;
    const message = document.querySelector('#contact-form textarea').value;
    
 
    // Aquí puedes agregar el código para enviar el formulario o realizar alguna acción adicional
    
    alert(`Gracias ${name} por contactarnos. Nos pondremos en contacto contigo pronto.`);
  });
  
// scrol up

document.getElementById("button-up").addEventListener("click", scrollUp);
 
function scrollUp(){

  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

if (currentScroll > 0){

window.requestAnimationFrame(scrollUp)
window.scrollTo (0, currentScroll -(currentScroll / 10));

}
}

//aparece el scroll

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

var scroll = document.documentElement.scrollTop;

if (scroll > 1000){
  buttonUp.style.transform = "scale(1)"
  
}else if(scroll < 1000){
  buttonUp.style.transform = "scale(0)"
}

}

