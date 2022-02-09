const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button')  //cria o botão concluir
    
    botaoConclui.classList.add('check-button') //add classe css no botão
    botaoConclui.innerText = 'concluir' //cria o texto dentro do botão

    botaoConclui.addEventListener('click', concluirTarefa) //função que aguarda o click no botão para executar 


    return botaoConclui

}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target  //target descobre qual elemento foi clicado

    const tarefaCompleta = botaoConclui.parentElement //pega o "pai" do botão(li)

    tarefaCompleta.classList.toggle('done') //executa o riscado na lista
}


export default BotaoConclui //exporta as funções desse arquivo para o arquivo principal "main"

