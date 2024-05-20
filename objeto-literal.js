//1
const persona = {
    nombre: 'Javier',
    edad: 24,
    ciudad: 'Ciudad Quesada'
};

//2 
console.log("Nombre:", persona.nombre);

//3
persona.ciudad = 'San Jose';

//4

persona.ocupacion = 'Estudiante';

//5
console.log("Propiedades del objeto:");
for(let clave in persona) {
    console.log(clave + ":", persona[clave]);
};