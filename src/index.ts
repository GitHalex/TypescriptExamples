// almacenamiento del nombre en la variable name
let name: String = "Alex";
console.log(name);
let last_name: String = "Calcina";
console.log(last_name);
let full_name = (name: String, last_name: String) => {
  console.log(`${name} es mi nombre  y mi apellido es ${last_name}`);
};
full_name(name, last_name);

// Declaracion de Variables
let nombre: String = "Martin";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`);

let edad: String = "30";
console.log(typeof edad);

const PI: number = 3.1416;
console.log(PI);

// Instanciacion multiple de variables
let a: string, b: boolean, c: number;
a = "Typescript";
b = true;
c = 8.9;

// builtypes:  number, string boolean, void, null, undefined

// tipos mas complejos
let listaTareas: string[] = ["tarea 1", "tarea 2"];
console.log(listaTareas);

// combinacion de tipios en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados
enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}
let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces
interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}
// podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  urgencia: 20,
};

console.log(`Tarea: ${tarea1.nombre}`);

// Types de TypeScript
type Producto = {
  precio: number;
  nombre: string;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 45000,
};
console.log(`Coche: ${coche.nombre}`);
