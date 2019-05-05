const fs = require('fs');
let listadoPorHacer = [];


const cargar = () => {
    /*
    No usar ésta Verga, porque lo va a leer asyncrónico y me caga las operaciones que vienen luego...
    fs.readFile("./db/data.json", (err, data) => {
        if (err) throw new Error('No se pudo leer la lista de tareas', err);
        listadoPorHacer = JSON.parse(data);
        //console.log(listadoPorHacer);
        //console.log(typeof(listadoPorHacer));
        //console.log(listadoPorHacer[0]);
      });    
    */ 
   listadoPorHacer = JSON.parse(fs.readFileSync("./db/data.json"));
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("./db/data.json", data, (err) => {
        if (err) 
            throw new Error('No se pudo grabar la lista de tareas', err);
    });    
}

const crear = (descripcion) => {
    cargar();

    let xhacer = {
        descripcion,
        completado: false,
    };

    
    //console.log(listadoPorHacer.length);
    let n = listadoPorHacer.push(xhacer);
    //console.log(n);
    guardarDB();
    return xhacer;

}

const getListado = () => {
    cargar();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado=true) => {
    cargar();

    let indice = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if(indice >= 0) {
        listadoPorHacer[indice].completado = completado;
        guardarDB();
    }

    return (indice >= 0);

}



module.exports = {

    crear, getListado, actualizar

}