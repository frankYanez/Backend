class TicketsManager {
    //inicializador de id en 0
    static contadorId = 0
    #precioBaseDeGanancia = 1.15;
    constructor(){
            
        this.eventos = [];
        
            
    }
    //Metodo #1
    getEventos(){
        return this.eventos
    }
    //Metodo #2
    agregarEvento( nombre, lugar, precio, capacidad, fecha ){
        const capacity = capacidad ?? 50
        const date = fecha ?? new Date().toDateString()
        TicketsManager.contadorId++;
        const nuevoEvento = {
            id: TicketsManager.contadorId++,
            nombre,
            lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: capacity,
            fecha: date,
            participantes: []

        }
        this.eventos.push(nuevoEvento)
    }
    //Metodo #3
    agregarUsuarios(idEvento, idUsuario){
        this.participantes.push()
    }
    //Metodo #4
    ponerEventoEnGira( idEvento, nuevaLocalidad, newDate){

    }
}