let jugados = 0;
let ganados = 0;
let perdidos = 0;
let tijera="tijera"
let piedra="piedra"
let papel="papel"


do {
    let jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
    //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
    function generarSimbolo(){
        let aleatorio = Math.floor((Math.random() * 3) + 1);

        switch(aleatorio){
            case 1:
                return "piedra";
            case 2:
                return "papel";
            case 3:
                default:
                    return "tijera";
        }
        
    }
    
   
    let elige = generarSimbolo();

   

    if ((jugada == piedra) && (elige == piedra) || (jugada == "papel") && (elige == "papel") || (jugada == "tijera") && (elige == "tijera") ) {
        alert(jugada + "-" + elige + ": Empate");
    }
    else if ((jugada == "piedra") && (elige == "papel")) {
        alert(jugada + "-" + elige + ": Gana PC");
        perdidos++;
    }
    else if ((jugada == "piedra") && (elige == "tijera")) {
        alert(jugada + "-" + elige + ": Gana Jugador");
        ganados++;
    }
   
    else if ((jugada == "papel") && (elige == "tijera")) {
        alert(jugada + "-" + elige + ": Gana PC");
        perdidos++;
    }
    else if ((jugada == "papel") && (elige == "piedra")) {
        alert(jugada + "-" + elige + ": Gana Jugador");
        ganados ++;
    }
   
    else if ((jugada == "tijera") && (elige == "piedra")) {
        alert(jugada + "-" + elige + ": Gana PC");
        perdidos++;
    }
    else if ((jugada == "tijera") && (elige == "papel")) {
        alert(jugada + "-" + elige + ": Gana Jugador");
        ganados++;
    }
    jugados ++;

} while (confirm("Jugar de nuevo"));

document.write("Partidas jugadas: " + jugados + "<br>");
document.write("Partidas ganadas: " + ganados + "<br>");
document.write("Partidas perdidas: " + perdidos + "<br>");
document.write("Partidas empatadas: " + (jugados-ganados-perdidos));
