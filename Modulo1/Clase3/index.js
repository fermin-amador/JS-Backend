
const prioridad = 5;

if (prioridad > 3) {
  console.log("Esta tarea es URGENTE");
}

//  If con else 
const prioridad = 1;

if (prioridad > 3) {
  console.log("Esta tarea es URGENTE");
} else {
    console.log("Esta tarea es normal");
}

//! If con niveles
const prioridad = 4;

if (prioridad >= 5) {
  console.log("crítica");
} else if (prioridad >= 3) {
  console.log("alta");
} else{
  console.log("baja");
}


//! siempre busca el true 
const mensaje = "      ";

if (mensaje) {
  console.log("La tarea tiene título");
} else {
  console.log("Falta el título");   // ← entra aquí: "" es falsy
  
}

//! Arreglos 

let nombre = "Ana";
let nombre2 = "Carlos";
let nombre3 = "Pepito";


let asistentes = ["JuanFe", "Richard", "Ana"];

console.log(asistentes[0]);
console.log(asistentes[1]);
console.log(asistentes[2]);
console.log(asistentes[3]);

let carrito = ["Pizza", "Gaseosa"];

carrito.push("Postre")   // agrega al final
console.log(carrito);        // [ 'Pizza', 'Gaseosa', 'Postre' ]

carrito.pop();               // elimina el último
console.log(carrito);        // [ 'Pizza', 'Gaseosa' ]

carrito[0] = "Hamburguesa";  // cambia el de la posición 0
console.log(carrito);        // [ 'Hamburguesa', 'Gaseosa' ]


//! Objetos
let perfilUser = ["Ana", 60, "profe", "Zipaquirá"]
console.log(perfilUser);


let perfilUsuario = {
  nombre: "Andrés",
  edad: 30,
  ciudad: "Cali"
};
console.log(perfilUsuario);

console.log(perfilUsuario.nombre);   // Andrés
console.log(perfilUsuario.edad);     // 30

//! Operaciones que se pueden 
let cliente = { 
    nombre: "Andrés", 
    edad: 30
};

cliente.ciudad = "Cali";     // agrega una nueva clave
console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }

cliente.edad = 31;           // cambia un valor existente
console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }

delete cliente.edad;         // elimina una clave
console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }

//! Ciclo for 

for (let i = 1; i < 3; i++) {
  console.log("Vuelta número " + i);
}

//! for...of
// const tareas = ["Pagar factura", "Regar plantas", "Llamar cliente"];

// for (const tarea of tareas) {
//   console.log("Tarea: " + tarea);
// }


//! Todo combinado 

const tareas = [
  { titulo: "Pagar factura", prioridad: 5 },
  { titulo: "Regar plantas", prioridad: 2 },
  { titulo: "Llamar cliente", prioridad: 4 }
];

for (const tarea of tareas) {
  if (tarea.prioridad > 3) {
    console.log(tarea.titulo + " → URGENTE");
  } else {
    console.log(tarea.titulo + " → normal");
  }
}


//! Funciones base

function saludar() {
  console.log("Hola, bienvenido al gestor de tareas");
}

saludar();

function saludarA(nombre) {
  console.log("Hola, " + nombre);
}

saludarA("Dayana");
saludarA("Ana");
saludarA("Carlos");



//! Funciones con Return
console.log("Aqui empieza return");

function clasificar(prioridad) {
  if (prioridad > 3) {
    return "URGENTE";
  } else {
    return "normal";
  }
}

clasificar(3);
const resultado = clasificar(5);
console.log(resultado);


//! usando de verdad el return 

function clasificar(prioridad) {
  if (prioridad > 3) return "URGENTE";
  else return "normal";
}

function construirEtiqueta(titulo, prioridad) {
  const nivel = clasificar(prioridad);   // ← usa el RETURN de clasificar
  return titulo + " [" + nivel + "]";
}

console.log(construirEtiqueta("Pagar factura", 5));   // Pagar factura [URGENTE]
console.log(construirEtiqueta("Regar plantas", 2));   // Regar plantas [normal]