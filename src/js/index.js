const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener('click', () => {

        EsconderBotaoSelecionado(); 

        SelecionarBotaoCarrossel(botao);

        EsconderImagemAtiva();

        MostrarImagemDeFundo(indice);
    })
})

function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');

    imagemAtiva.classList.remove('ativa');
}

function SelecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function EsconderBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');

    botaoSelecionado.classList.remove('selecionado');
}
