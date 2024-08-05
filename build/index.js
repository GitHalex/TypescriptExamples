"use strict";
// almacenamiento del nombre en la variable name
let name = "Alex";
console.log(name);
let last_name = "Calcina";
console.log(last_name);
let full_name = (name, last_name) => {
    console.log(`${name} es mi nombre  y mi apellido es ${last_name}`);
};
full_name(name, last_name);
// Declaracion de Variables
let nombre = "Martin";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`);
let edad = "30";
console.log(typeof edad);
const PI = 3.1416;
console.log(PI);
// Instanciacion multiple de variables
let a, b, c;
a = "Typescript";
b = true;
c = 8.9;
// builtypes:  number, string boolean, void, null, undefined
// tipos mas complejos
let listaTareas = ["tarea 1", "tarea 2"];
console.log(listaTareas);
// combinacion de tipios en listas
let valores = [false, "Hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
// podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 20,
};
console.log(`Tarea: ${tarea1.nombre}`);
let coche = {
    nombre: "Audi",
    precio: 45000,
};
console.log(`Coche: ${coche.nombre}`);
