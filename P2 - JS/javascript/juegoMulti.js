let num1, num2, bueno, respuesta, resultado;
let veces=0, aciertos=0; fallos=0;
let repe = 0;

function juego (repe){
    let pregunta = document.querySelector("#pregunta");
    let lista = document.querySelectorAll("li");

    num1 = Math.floor((Math.random()*10+1));
    num2 = Math.floor((Math.random()*10+1));

    pregunta.innerHTML = "¿Cuanto es " + num1 + "X" + num2 + "?";

    bueno = Math.floor(Math.random()*3);
    malo1 = num1 - Math.floor((Math.random()*10+1)) * num2;
    malo2 = num2 * Math.floor((Math.random()*10+1));
    respuesta = num1 * num2;
    resultado = lista[bueno].innerHTML = respuesta;

    if(bueno==0){
        lista[1].innerHTML = malo1;
        lista[2].innerHTML = malo2;
    }
    else if(bueno==1){
        lista[0].innerHTML = malo2;
        lista[2].innerHTML = malo1;
    }
    else{
        lista[0].innerHTML = malo1;
        lista[1].innerHTML = malo2;
    }
    repe++
    if(repe<10){
        juego(repe);
    }
    else{
        comprobar;
    }
    
}
