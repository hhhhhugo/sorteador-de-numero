function sortear (){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteador = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++){
        numero = numeroAleatorio(de, ate);

        while (sorteador.includes(numero)){
            numero = numeroAleatorio(de, ate);
        }
        sorteador.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteador} </label>`;    
    habilitarBotao();
}
function reiniciar (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    habilitarBotao();
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function habilitarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');   
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}