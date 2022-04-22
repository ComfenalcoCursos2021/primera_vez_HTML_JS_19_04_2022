console.log(`Hola mundo :v`);
console.error(`Miguel Angel`);
console.warn(`Hola Estudiantes`);
console.info(`informacion`);


console.log(`%cMensaje personalizado`,`font-family:cursive; color:green; background-color:#7979794d;`);

console.group(`Diplomado de JavaScript`);
    console.log(`Miguel`);
    console.log(`Mercedes`);
    console.log(`Oscar`);
    console.log(`Alonso`);
    console.log(`Jose`);
console.groupEnd();

console.table([`Alonso`]);
console.table({Nombre:`Alonso`});

console.table([{Nombre:`Alonso`, apellido: `Leon`}]);
console.time();
    console.count();
    console.count();
    console.count();
console.timeLog();