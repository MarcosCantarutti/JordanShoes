
var options = {
  strings: ['', 'O tenis Jordan é fruto de uma velha e forte parceria entre a nike e o jogador Michel Jordan.'],
  typeSpeed: 30
};

var typed = new Typed('p', options);


const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});
    
ScrollReveal().reveal('.container-min', { delay: 100 });
ScrollReveal().reveal('.container-intro', { delay: 200 });
ScrollReveal().reveal('.content', { delay: 400 });
ScrollReveal().reveal('.container-text', { delay: 500 });


