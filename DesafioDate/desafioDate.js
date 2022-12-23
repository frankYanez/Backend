
const fs = require('fs/promises');

const processFile = async() => {
    try{
        //leemos el archivo el package y lo guardamos en una variable
        const text = await fs.readFile('./package.json', 'utf-8');
        

        //Creamos un objeto que contendra la informacion
        const info = {
            //El contenido como esta arriba 
            contenidoStr: text,
            //Lo parseamos
            contenidoObj: JSON.parse(text),
            size: text.length
        };
        //Lo convertimos a string (el archivo que convertimos, si queremos reemplazar algo NO, para que quede bien identado)
        const infoStr = JSON.stringify(info,null,'\t')
        console.log(info);
        //Que nos es
        await fs.writeFile('./info.json', infoStr)
        console.log('Creado Exitosamente');
    }
    catch(error){
        throw new Error('Hubo error: ')
    }
}

processFile()