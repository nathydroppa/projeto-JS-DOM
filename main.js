import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'
 
    const criarTarefa = (evento) => {

    evento.preventDefault()  //evita que a informação seja enviada, e recarregue e a página, retém assim a informação// 

    const lista = document.querySelector('[data-list]') //percorre o dom nos elementos da ul//
    const input = document.querySelector('[data-form-input]')
    const valor = input.value //chamei o botão > criamos um evento que irá ficar aguardando o botão de click ser clicado > quando click irá percorrer o dom procurando o input > vai pegar o valor do input  vai colocr no console log e exibir*//

    const tarefa = document.createElement('li') //cria a lista de elementos digitados no input , um embaixo do outro//
    tarefa.classList.add('task') // add classe do estilo css para a lista
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui()) //coloca o botão conclui dentro de cada li
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]') // para capturar o que foi escrito no form após apertar o botão\\
                                          //criamos um data com a classe utilizada para a criação do botão, pois caso o nome da classe seja alterado, não precisamos alterar o js para captura dos dados\\
novaTarefa.addEventListener('click', criarTarefa)