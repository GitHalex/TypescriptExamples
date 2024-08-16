"use strict";
// almacenamiento del nombre en la variable name
/* let name: String = "Alex";
console.log(name);
let last_name: String = "Calcina";
console.log(last_name);
let full_name = (name: String, last_name: String) => {
  console.log(`${name} es mi nombre  y mi apellido es ${last_name}`);
};
full_name(name, last_name); */
// Declaracion de Variables
/* let nombre: String = "Martin";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`);

let edad: String = "30";
console.log(typeof edad);

const PI: number = 3.1416;
console.log(PI); */
// Instanciacion multiple de variables
/* let a: string, b: boolean, c: number;
a = "Typescript";
b = true;
c = 8.9; */
// builtypes:  number, string boolean, void, null, undefined
// tipos mas complejos
// let listaTareas: string[] = ["tarea 1", "tarea 2"];
// console.log(listaTareas);
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
    anio: 2009,
};
console.log(`Coche: ${coche.nombre}`);
// CONDICIONALES
// Operadores ternacios
console.log(coche.anio < 2010
    ? `Coche ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`);
// If - else
/* if (error) {
  console.log("Hay un error");
  
} else {
  console.log("no hay un error");
  
} */
// If -else if -else
if (coche.anio < 2010) {
    console.log(`coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}
else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no esta completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente de comprobarse");
        break;
    default:
        break;
}
// Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2,
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 1,
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 3,
    },
];
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre} otro`);
}
/* listaTareasNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

while (tarea1.estado !== Estados.Completado) {
  if (tarea1.urgencia == 5) {
    tarea1.estado = Estados.Completado;
  } else {
    tarea1.urgencia++;
  }
} */
// FUNCIONES
/**
 *
 * @param params Funcion que muestra un saludo
 */
function saludar() {
    let nombre = "Alex";
    console.log(`¡hola, ${nombre}`);
}
// invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`¡hola, ${nombre}`);
}
saludarPersona("Alex");
/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a despedir; por defecto sera "Pepe"
 */
function despedirPersona(nombre = "Pepe") {
    console.log(`¡Adios, ${nombre}`);
}
despedirPersona();
/**
 *
 * @param nombre (Opcional) Nombre de la persona
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`¡Adios, ${nombre}`);
    }
    else {
        console.log("Adios");
    }
}
despedidaOpcional(); //Adios
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
variosParams("alex");
variosParams("alex", "Lopez perez");
variosParams("Alex", undefined, 30);
function ejemploVariosTipos(a) {
    if (typeof a === "string") {
        console.log("A es un string");
    }
    else if (typeof a === "number") {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number");
    }
}
ejemploVariosTipos("Hola");
ejemploVariosTipos(1);
/**
 *
 * @param nombre nombre de la persona
 * @param apellido appelido de la person
 * @returns nombre completo de la persona
 */
function ejemploReturn(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
const nombreCompleto = ejemploReturn("Alex", "Lopez");
console.log(nombreCompleto);
console.log(ejemploReturn("Alex", "Lopez"));
let empleadoAlex = {
    nombre: "Alex",
    apellidos: "Lopez",
    edad: 30,
};
/* const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} tiedad ${empleado.edad} años`;

console.log(mostrarEmpleado(empleadoAlex)); */
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilicion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
console.log(datosEmpleado(empleadoAlex));
