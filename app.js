//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch( comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion);
        //console.log( tarea );
        break;

    case 'listar':
        //console.log(  `${comando} por hacer`);
        let lista = porHacer.getListado();
        console.log( `------- Tareas ${lista.length} -------`.blue);
        for( let t of lista ) {
            if(t.completado) {
                console.log(
                    `${t.descripcion} terminada: ${t.completado}`.green
                );
            } else {
                console.log(
                    `${t.descripcion} terminada: ${t.completado}`.red
                );
            }
        }
        console.log( `------- Final Tareas -------`.blue);

        break;
    case 'actualizar':
        //console.log(  `${comando} por hacer`);
        let b= porHacer.actualizar( argv.descripcion, argv.completado);
        console.log(`tarea actualizada: ${b}`);
        break;  

    case 'eliminar':
        //console.log(  `${comando} por hacer`);
        let e= porHacer.eliminar( argv.descripcion);
        console.log(`tarea eliminada: ${e}`);
        break; 

    default:
        console.log(  `${comando}: comando no reconocido`); 
        return;
}