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
        return this.avance; 
    }
}
class Tablero{
    casillas(numero){
        switch (numero){
            //Casillas para las escaleras
        case 6:
            return 12;
        case 19:
            return 29;
        case 35:
            return 41;
        case 51:
            return 62;
        case 65:
            return 72;
        case 75:
            return 84;
        case 27:
            return 48;
        case 67:
            return 88;
        case 36:
            return 97;
            //Serpientes
        case 93: 
            return 34;
        case 86:
            return 49;
        case 86:
            return 58;
        case 64:
            return 45;
        case 56:
            return 38;
        case 44:
            return 26;
        case 15:
            return 7;
        case 52:
            return 33;
        case 71:
            return 22;
        case 17:
            return 9;
        default: 
        return numero
        }
    }
}
let dado = new Dado();
let mesa = new Tablero();
let p1 = new Jugador("Luis");
let p2 = new Jugador("Alan");

while (p1.posicion <= 100 && p2.posicion <=100){
    p1.posicion = mesa.casillas(p1.avanzar(dado.tirar()));
    p2.posicion = mesa.casillas(p2.avanzar(dado.tirar()));
    console.log(`${p1.nombre} se encuentra en la posicion: ${p1.posicion},
     ${p2.nombre} se encuentra en la posicion: ${p2.posicion}`)
}
if(p1.posicion >= 100){
    console.log(`Jugador 1: ${p1.nombre}. !Ah GANADO¡`)
}else if (p2.posicion >= 100){
    console.log(`Jugador 2: ${p2.nombre}. !Ah GANADO¡`)
}