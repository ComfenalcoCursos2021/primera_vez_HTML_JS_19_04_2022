                                                                                                                                                                                             
let nombre, 
    edad, 
    alutura, 
    soyProfesor, 
    cuentaBancaria, 
    dirrecion;

let descripcion = { //Object
    Tipopelo : `Liso`,
    ojos : 2,
    tamañoNariz : 3.5
};

let pasatiempos = []; //Array 'Enumerado'
// pasatiempos.push(`Programar`);
// pasatiempos.push(`Cocino`);
// pasatiempos.push(`Escuchar musica`);
// pasatiempos.push(`Trotar`);

pasatiempos["Pasatiempo importatante"] =  `Programar`;//Array Asoociativo
pasatiempos[4] =  `Cocino`;
pasatiempos[5] =  `Escuchar musica`;
pasatiempos[6] =  `Trotar`;

 


nombre = `Miguel Angel Castro Escamilla`; //String
edad = 24;//Number
alutura = 1.63;//Number 'Decimales'
soyProfesor = true;//Boolean
cuentaBancaria = null;//Null
dirrecion;//undefined

console.log(`Nombre: ${nombre}`);
console.log(`%cEdad: %c${edad}`,"font-family:cursive;", "color:#7199f8; font-family:sans-serif;");
console.log(`%cAltura: `,"font-family:cursive;", alutura);
console.log(`%cSoy el profesor: ${soyProfesor}`,"font-family:cursive;" );
console.log(cuentaBancaria);
console.log(dirrecion);
console.table([descripcion]);
console.log(pasatiempos);





// let lista = new Array(2).fill(undefined);
// Object.preventExtensions(lista);
// lista[0] = "Modificado";
// lista[2] = "No me deja colocar datos";
// console.log(lista);