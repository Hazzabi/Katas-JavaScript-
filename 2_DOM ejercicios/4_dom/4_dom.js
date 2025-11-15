// 1.1 Añadir boton con id btnToClick y evento click
const body = document.body;
//boton
const btn = document.createElement('button');
btn.id = 'btnToClick';
btn.textContent = 'Haz click aquí';
body.appendChild(btn);
// evento de click
btn.addEventListener('click', function(event) {
    console.log('¡Click detectado!', event);
});

// 1.2 Evento focus en el input con clase .focus
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', function() {
    console.log('Valor en focus:', this.value);
});

// 1.3 Evento input en el input con clase .value
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', function() {
    console.log('Valor actual:', this.value);
});