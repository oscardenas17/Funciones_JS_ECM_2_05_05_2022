function Saludar(lista) {
    let {nombre, direccion, edad, ...DatosSobrantes} = lista;
    lista = undefined;
}

Saludar({nombre:'Diana', direccion:"Calle 55", altura: 1.70});



// let nombres = {
//     Nombre1: "Diana",
//     Nombre2: "Marcela",
//     Nombre3: "Nestor", 
//     Nombre4: "Maria",
// };
// let nombres2 = ["Diana","Marcela","Nestor", "Maria"];

// let fnA = (Alumnos) => {
//     Object.assign(this, Alumnos);
//     console.log(this.Nombre1);
//     console.log(this.Nombre2);
//     console.log(this.Nombre3);
//     console.log(this.Nombre4);
// };
// let fnB = (Nombre1, Nombre2, Nombre3, Nombre4) => {
//     console.log(Nombre1);
//     console.log(Nombre2);
//     console.log(Nombre3);
//     console.log(Nombre4);
// };
// fnA(nombres);
// console.log("-------------------------------------");
// fnB(...nombres2);

// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// Funciones Flecha
// ()=>{}; 

// let fnA = (saludo) => {
//     return `Hola ${saludo} como estas`;
// }
// let fnB = saludo => {
//     return `Hola ${saludo} como estas`;
// }
// let fnC = saludo => `Hola ${saludo} como estas`;
// let fnD = (saludo) => `Hola ${saludo} como estas`;