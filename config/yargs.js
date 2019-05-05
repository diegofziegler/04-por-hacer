//definir los comandos a utilizar...

const argv = require('yargs')
.usage('$0 <crear|listar|modificar> [argumentos]')
.command('crear', 'crea una nueva tarea',
    {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea por hacer'
        }
    }
)
.command('actualizar', 'actualiza el estado de una tarea', 
    {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'estado de la tarea: true o false'
        }
    }
)
.command('eliminar', 'borrar la tarea de la lista', 
    {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea'
        }
    }
)
.command('listar', 'muestra todas las tareas')
.help()
.argv;

module.exports = {
    argv
}
