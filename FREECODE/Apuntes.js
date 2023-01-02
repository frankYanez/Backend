//Modulo proccess, para acceder a los datos del sistema
// console.log(process.memoryUsage());

const { application } = require("express");

// <-------------------------------------------------------->

// Modulo Timers: SetTimeOut(Funcion, segundos, argumentos) contiene 3 parametros. 1 La funcion a ejecutar, 2 los milisegundos, 3 los argumentos, SetInmediate(funcion, argumentos) lo hace una vez que termine el codigo sincrono, setInterval(funcion,intervalo, argumentos)

// <------------------------------------------------------------>
// FILE SYSTEM

//Modulo FS: Es asincrono por defecto, pero pueden utilizarse versiones Sincronas agregando "Sync" al nombre del metodo que desees usar. Ej: fs.writeFile => fs.writeFileSync.

//LEER UN ARCHIVO: Fs.readFile('ruta' , 'formato' , funcion(error, contenido){
// if(error){
//     console.log(error);
// }else{
//     console.log(contenido)};
// })

//RENOMBRAR UN ARCHIVO: fs.rename( 'ruta' , 'nuevo nombre' , funcion(err)){
//     if(err){
//        throw console.log(error);
//     }
//     console.log(nombre cambiado);
// }

//Agrgar contenido al final de un archivo, si esta vacio agrega uno nuevo: fs.appendFile( 'ruta' , 'el contenido' , funcion(err){
//     if(err){
//         throw err;
//     }
//     console.log(Archivo agregado);
// })

//REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO: fs.writeFile( 'ruta' , 'contenido' , funcion(err){
//     if (err) {
//         throw err
//     }
//     console.log(contenido reescrito);
// })

//Eliminar archivos: fs.unlink( 'ruta' , funcion(err){
//     if(err){
//         throw err
//     }

//     console.log(Archivo eliminado);
// })

// <--------------------------------------------------------------->

//JSON
//Debemos enviar la informacion al servidor en formato JSON.


//De Objeto a JSON (Convierte un objeto en formato JSON) = JSON.stringify()


//Cadena de Caracteres => Objeto (PARA ENVIAR AL SERVIDOR)
//De JSON a Objeto = JSON.parse()

// <----------------------------------------------------------------->

// MODULO EVENTS

//Se pone Event con mayuscula porque es una clase

// EJEMPLO:
// on('nombreEvento' , funcion a ejecutar) = asocia el evento. si la funcion tiene parametros se pone en el emitter
// emit('nombreEvento' , parametros SI LOS HAY) = lo ejecuta

// const EventEmitter = require('events')
// const emisorProductos = new EventEmitter()
// emisorProductos.on('nombreEvento' , () => {

// })

// <---------------------------------------------------------------------->

// PROMESAS

// const miPromesa = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if
//     },3000)
// })

//Si asignas una promesa como retorno de una funcion osea = () => {
//     return new Promise((res,rej))
// } Esa funcion seria asincrona, porque la funcion debe esperar que la promesa se resuleva o se rechaze

//Todas las funciones con async retornan una promesa

// <------------------------------------------------------------------------->

//HTTP
//Protocolo: Es un conjunto de reglas que permiten transmitir informacion entre 2 dispositivos de una red

//REQUEST: Contiene: 
// -Metodos HTTP: GET: obtener datos , POST: crear datos , PUT: muodificar , DELETE: eliminar
//PATH - 
//VERSION HTTP
// HEADS
// BODY(solo se incluye en POST y PUT)


//RESPONSE: Contiene:
//Codigo de estado:
//Testo estado:
//Version HTTP
//Heads:
//Body:

// CODIGOS RESPUESTA
// 100-199(Informativas)
//200-299(Satisfactorias)
//300-399(Redirecciones)
//400-499(errores de clientes)
//500-599(Errores de los servidores)

//REQUEST
//req.url(): devuelve la url que solicita el cliente ej: /freeCodeCamp/Cursos
//req.method(el mtodo POST PUT etc)


//RESPONSE
//res.statusCode() : por defecto es 200
//res.setHeader('tipo de contenido' , 'application/json')
//res.getHeaders(): obtiene los valores de la cabecera

//Estructura de una URL
//Utilizamos parametros query para btener solicitudes GET


// <------------------------------------------------------------------>
// Modulo URL

// const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')
// miURL.hostname -> www.ejemplo.org
// miURL.pathname -> /cursos/programacion
// miURL.searchParams -> { 'ordenar' => 'vistas', 'nivel' => '1'}

// ACCEDER A LAS PROPIEDADES DE LOS PARAMETROS
// miURL.searchParams.get('ordenar')

//Cuando subamos la pagina a internet y nos asignen el puerto, hay que poner proccess.env.PORT asi se autoasigna el puerto

//Router

// Paso1: se llama al modulo router y se le asigna a una variable que reemplazaria al cido repetido routerNombre = express.Router()

//Paso2: app.use('/api/cursos/programacion' , routerNombre) se le asiga a app.use ('valor que se repite' , nombre de variable que reemplaza ese valor)

// ejemplo de como quedaria:
// routerMatematicas.get('/', (req,res)=>{

// })


//Metodo POST: req.body contiene la informacion a enviar, por lo cual se almacena en una variable para luego pushearlo al array de productos/cursos
//Existen 3 formas de enviar informacion del cliente al servidor. Req.params, req.query o req.body
//Ejemplo
// routerProgramacion.post('/', (req, res) => {
//     let cursoNuevo = req.body;
//     programacion.push(cursoNuevo) ;
//     res.send(JSON.stringify(programacion) );
//     3
    
//     module.exports] = routerProgramacion;


//Metodo Patch: object.assign(productoAActualizar,informacionActualizada): para actualizar los valores de un objeto
    


// <-------------CODER------------------>

// res.send() : envia la respuesta al cliente
// app.listen( PUERTO , ()=>{ console.log(Escuchando en servidor PUERTO);}): Escucha en el puerto

// Si se usa rest API para devolver se usa res.json


{/* <-------------------ROUTER / MILDWEARE-----------------------> */}
// app-usetexpress. Jsont));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(‘src/public'))

// application.use(express.static('src/public')): envia el html estatico