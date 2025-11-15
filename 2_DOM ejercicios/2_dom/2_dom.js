// 2.1 - Insertar un div vacío
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);
console.log('2.1 - Div vacío creado');

// 2.2 - Insertar un div con un p dentro
const divConP = document.createElement('div');
const parrafo = document.createElement('p');
parrafo.textContent = 'Este es un párrafo dentro de un div';
divConP.appendChild(parrafo);
document.body.appendChild(divConP); 
console.log('2.2 - Div con p creado');

// 2.3 - Hacer un div con 6 p utilizando un bucle for
const divCon6P = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo número ${i}`;
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);
console.log('2.3 - Div con 6 p creado');

// 2.4 - Crear una p con texto "Soy dinamico!"
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);
console.log('2.4 - p dinámico creado');

// 2.5 - Insertar texto en h2 con clase .fn-insert-here
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';
console.log('2.5 - Texto en h2 cambiado');

// 2.6 - Crear una lista con apps
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul"); 
for (let i = 0; i < apps.length; i++) {
  const item = document.createElement("li");
  item.textContent = apps[i];
  lista.appendChild(item);
}
document.body.appendChild(lista); 
console.log('2.6 - Lista de apps creada');

// 2.7 - Eliminar todos los <p> con clase .fn-remove-me
const elementosParaBorrar = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < elementosParaBorrar.length; i++) {
  elementosParaBorrar[i].remove();
}
console.log("2.7 - Elementos .fn-remove-me eliminados");

// 2.8 - Insertar "Voy en medio!" entre los dos div
const primerDiv = document.querySelector(".div1");
const segundoDiv = document.querySelector(".div2");
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
primerDiv.parentNode.insertBefore(pMedio, segundoDiv);
console.log("2.8 - p 'Voy en medio!' insertado");

// 2.9 - Insertar "Voy dentro!" en todos los div.fn-insert-here
const divsParaInsertar = document.querySelectorAll(".fn-insert-here");
for (let i = 0; i < divsParaInsertar.length; i++) {
  const pDentro = document.createElement("p");
  pDentro.textContent = "Voy dentro!"; 
  divsParaInsertar[i].appendChild(pDentro);
}
console.log("2.9 - p 'Voy dentro!' en todos los divs");