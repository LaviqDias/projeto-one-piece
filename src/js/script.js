
const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado")
        botao.classList.add("selecionado");
        
    })
})