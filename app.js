let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do Numero Secreto');
    exibirTexto('p', 'Escola um numero de 1 a 10');

}
exibirMensagemInicial();

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosNaLista == numeroLimite ){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    

    if (chute== numeroSecreto){

        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'; 
        exibirTexto('h1','Voce acertou');
        let mensagemTentativas = `Voce descobriu o numemro secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        if(chute > numeroSecreto){
            exibirTexto('p','O numero secreto é menor');
        }else{
            exibirTexto('p','O numero secreto é maior'); 
        }

        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



