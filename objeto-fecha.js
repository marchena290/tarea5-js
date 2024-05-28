// 1
const fechaActual = new Date();

// 2
console.log("Año actual:", fechaActual.getFullYear());

// 3
console.log("Mes actual:", fechaActual.getMonth());

// 4
const proximoAnio = fechaActual.getFullYear() + 1;
const fechaProximoAnio = new Date(proximoAnio, 0, 1);  
console.log("Fecha del 1 de enero del próximo año:", fechaProximoAnio);
