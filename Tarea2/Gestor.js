import fs from 'fs';
import readline from 'readline';
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({input, output})
const leerCampo = texto =>{
    return new Promise((resolve => {rl.question(`${texto}: `, (respuesta) => resolve(respuesta))}))
}

function imprimirOpciones(){
    console.log("-----------------Bienvenido a la TAREA2-----------------")
    console.log("Selecciones una opción")
    console.log("1.Cargar archivo");
    console.log("2. Salir");
}

const ejecutarOpcion = async (opcion) => {
    switch(opcion){ 
        case '1': {
            let ruta = await leerCampo('Ingrese el nombre del archivo')
            try {
                const contenido =  fs.readFileSync(`./${ruta}`, `utf-8`);
                console.log('\x1b[32mContenido del archivo:\x1b[0m');
                console.log(contenido);
            } catch (error) {
                console.error('\x1b[31mError al leer el archivo:\x1b[0m \n','\x1b[1mEl error es el siguiente:\x1b[0m', error.message, '\x1b[0m');
            }
            main();
            break;
        }
        case '2': 
        console.log("-----------------Gracias por revisar la TAREA2-----------------")
        rl.close();
        return;
    }
}

const main = () => {
    imprimirOpciones();
    rl.question("Seleccione una opción: ", ejecutarOpcion);
}

main();

