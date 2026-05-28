function sortear (){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteador = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++){
        numero = numeroAleatorio(de, ate);
        sorteador.push(numero);
    }
    alert(sorteador);
}
function reiniciar (){
    
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}