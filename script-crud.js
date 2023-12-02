"use strict"

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const btnCancelarTarefa = document.querySelector('.app__form-footer__button--cancel');

const listaTarefas = JSON.parse(localStorage.getItem('localStoreTarefas')) || [];
// console.log(listaTarefas)
function atualizarTarefas(){
    localStorage.setItem('localStoreTarefas', JSON.stringify(listaTarefas));
};

function criarElementoTarefa(objTarefa) {
    const liElement = document.createElement('li');
    liElement.classList.add('app__section-task-list-item');

    const svgElement = document.createElement('svg');
    svgElement.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>`;

    const pElement = document.createElement('p');
    pElement.textContent = objTarefa.descricao;
    pElement.classList.add('app__section-task-list-item-description');
    
    const btnElement = document.createElement('button');
    btnElement.classList.add('app_button-edit');

    btnElement.onclick = () => {
        const novaDescricao = prompt("Qual é o novo nome da tarefa?");
        if(novaDescricao){
            pElement.textContent = novaDescricao;
            objTarefa.descricao = novaDescricao;
            atualizarTarefas();
        }
    };
    // debugger;
    // btnElement.addEventListener('click', () => {
    // const novaDescricao = prompt('Digite o novo nome para a Tarefa');
    // pElement.textContent = novaDescricao;
    // });

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', './imagens/edit.png');
    btnElement.append(imgElement);

    liElement.append(svgElement);
    liElement.append(pElement);
    liElement.append(btnElement);

    return liElement;
}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
});

btnCancelarTarefa.addEventListener('click', () => {
    textArea.textContent = '';
    formAdicionarTarefa.classList.add('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const novaTarefa = { descricao: textArea.value };
    listaTarefas.push(novaTarefa);
    const exibElementoTarefa = criarElementoTarefa(novaTarefa);
    ulTarefas.append(exibElementoTarefa);
    // localStorage.setItem('localStoreTarefas', JSON.stringify(listaTarefas));
    atualizarTarefas();
    textArea.value = '';
    formAdicionarTarefa.classList.add('hidden')
});

listaTarefas.forEach(objTarefa => {
    const elementoTarefa = criarElementoTarefa(objTarefa);
    ulTarefas.append(elementoTarefa);
});
