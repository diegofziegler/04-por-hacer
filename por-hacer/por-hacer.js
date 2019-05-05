const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("./db/data.json", data, (err) => {
        if (err) 
            throw new Error('No se pudo grabar la lista de tareas', err);
    });    
}

const crear = (descripcion) => {
    let xhacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(xhacer);
    guardarDB();
    return xhacer;

}


module.exports = {

    crear

}