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
        }
    }
}