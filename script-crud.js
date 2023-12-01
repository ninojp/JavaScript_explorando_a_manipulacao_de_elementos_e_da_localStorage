"use strict"

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const listaTarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const novaTarefa = { descricao: textArea.value};
    listaTarefas.push(novaTarefa);
    localStorage.setItem('localStoreTarefas', JSON.stringify(listaTarefas));
});