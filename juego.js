class Dado{
    constructor(){
    }
        tirar(){
            return Math.ceil(Math.random() * 6);
        }
}
class Jugador{
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
        this.avance = 0
    }
    avanzar(numero){
        this.avance = numero + this.posicion
    }
}
class Tablero{
    casillas(numero){
        
    }
}