const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => { 
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement //pega o eletento "pai" do botão deleta(li), quando clicar em deletar irá excluir a li inteira

    tarefaCompleta.remove() //exclui a li

    return botaoDeleta

}

export default BotaoDeleta //exporta funções deste arquivo para o arqivo principal "main"