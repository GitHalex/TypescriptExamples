// almacenamiento del nombre en la variable name
/* let name: String = "Alex";
console.log(name);
let last_name: String = "Calcina";
console.log(last_name);
let full_name = (name: String, last_name: String) => {
  console.log(`${name} es mi nombre  y mi apellido es ${last_name}`);
};
full_name(name, last_name); */

import { error } from "console";

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
  anio: number;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 45000,
  anio: 2009,
};
console.log(`Coche: ${coche.nombre}`);

// CONDICIONALES

// Operadores ternacios
console.log(
  coche.anio < 2010
    ? `Coche ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`
);

// If - else
/* if (error) {
  console.log("Hay un error");
  
} else {
  console.log("no hay un error");
  
} */

// If -else if -else
if (coche.anio < 2010) {
  console.log(`coche: ${coche.nombre} es viejo`);
} else if (coche.anio === 2010) {
  console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
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
let listaTareasNueva: Tarea[] = [
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
function saludarPersona(nombre: string) {
  console.log(`¡hola, ${nombre}`);
}

saludarPersona("Alex");

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a despedir; por defecto sera "Pepe"
 */
function despedirPersona(nombre: string = "Pepe") {
  console.log(`¡Adios, ${nombre}`);
}
despedirPersona();

/**
 *
 * @param nombre (Opcional) Nombre de la persona
 */
function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log(`¡Adios, ${nombre}`);
  } else {
    console.log("Adios");
  }
}
despedidaOpcional(); //Adios

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) {
    console.log(`${nombre} ${apellidos} tiene ${edad} años`);
  } else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("alex");
variosParams("alex", "Lopez perez");
variosParams("Alex", undefined, 30);

function ejemploVariosTipos(a: string | number) {
  if (typeof a === "string") {
    console.log("A es un string");
  } else if (typeof a === "number") {
    console.log("A es un number");
  } else {
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
function ejemploReturn(nombre: string, apellido: string): string {
  return `${nombre} ${apellido}`;
}

const nombreCompleto = ejemploReturn("Alex", "Lopez");
console.log(nombreCompleto);
console.log(ejemploReturn("Alex", "Lopez"));

/**
 * Funcion que recibe multiples parametros
 * @param nombres es una liusta de nombres de string
 */
/* function ejemploMultipleParams(...nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}
ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin", "Alex", "Pepe");

const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);

function ejemploParamLista(nombres: string[]): void {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploParamLista(lista); */

// Arrow functions
type Empleado = {
  nombre: string;
  apellidos: string;
  edad: number;
};

let empleadoAlex: Empleado = {
  nombre: "Alex",
  apellidos: "Lopez",
  edad: 30,
};

/* const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} tiedad ${empleado.edad} años`;

console.log(mostrarEmpleado(empleadoAlex)); */

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `Empleado ${empleado.nombre} esta en edad de jubilicion`;
  } else {
    return `Empleado ${empleado.nombre} esta en edad laboral`;
  }
};

console.log(datosEmpleado(empleadoAlex));

const obtenerSalario = (empleado: Empleado, cobrar: () => `Cobrar`) => {
  if (empleado.edad > 70) {
    return;
  } else {
    cobrar(); //callback a ejecutar
  }
};

const cobrarSalario = () => {
  console.log("Cobrar nomina de empleado");
};

// Async functions
/* async function ejemploAsync(): Promise<string> {
  await console.log(
    "Tarea a completar antes de seguir con la secuencua de instrucciones"
  );
  console.log("Tarea completada");
  return "Completado";
}
ejemploAsync()
  .then((respuesta) => {
    console.log("Respuesta", respuesta);
  })
  .catch(() => {
    console.log(error);
  })
  .finally(() => "Todo ha terminado"); */

/* // Generators
function* ejemploGenerator() {
  // yield --> para emitir valores
  let index = 0;
  while (index < 5) {
    // Emitimos un valor incrementado
    yield index++;
  }
}
// guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();

// Worker
function* watcher(valor: number, maxIteraciones: number = 3) {
  yield valor;

  if (maxIteraciones > 0) {
    yield* worker(valor);
    yield* watcher(valor, maxIteraciones - 1);
  }
  yield valor + 10;
}
function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}
// Accedemos a los valores emitidos
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value); */

function* ejemploGenerator() {
  let index = 0;
  while (index < 5) {
    yield index++;
  }
}

function* watcher(valor: number, maxIteraciones: number = 3) {
  yield valor;
  for (let i = 0; i < maxIteraciones; i++) {
    yield* worker(valor);
  }
  yield valor + 10;
}

function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generadora = ejemploGenerator();

console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);

// Sobrecarga de funciones

function mostrarError(error: string | number): void {
  console.log("Ha habido un error: ", error);
}

// Persistencia de datos
// 1. localStorage --> Almacena los datos en el navegador (no se eliminan automaticamente)
// 2. SessionStorage --> La diferencia radica en la sesion de navegador. es Decipher, los datos se persisten en la sesion del navegador
// 3. cookies --> tienen una fecha de caducidad y tambien tienen un ambito de URL

// LocalStorage

/* function guardarEnLocalStorage(): void {
  AsyncLocalStorage.set("Nombre", "Martin");
}

function leer(): void {
  let nombre = localStorage.get("Nombre");
} */

import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";
//  COOKIES

const cookieOptions = {
  name: "Usuario",
  value: "Martin",
  maxAge: 10 * 60,
  expires: new Date(2099, 10, 1),
  path: "/",
};

// Setaemos la Cookie
setCookie(cookieOptions);

// Leer una Cookie
let cookieLeida = getCookieValue("usuario");

//Eliminar
deleteCookie("usuario");

// Elimiar todas los cookies
deleteAllCookies();

class Curso {
  nombre: string;
  horas: number;
  constructor(nombre: string, horas: number) {
    this.nombre = nombre;
    this.horas = horas;
  }
}

class Estudiante {
  // Propiedes de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];

  constructor(nombre: string, cursos: Curso[], apellidos?: string) {
    //inicialisamos las propiededades
    this.nombre = nombre;
    if (apellidos) {
      this.apellidos = apellidos;
    }
    this.cursos = cursos;
  }
}

// Creamos un curso

const cursoTS = new Curso("TypeScript", 15);
const cursoJS = new Curso("JavaScript", 15);

const listaCursos;
