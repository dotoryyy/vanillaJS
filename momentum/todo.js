const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function paintToDo(text) {
    
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);nnnnnnnnnnnnnnnnnnnnnnn
        //까르보네피자 고구마피자 핫치킨피자
    if(toDos !== null) {
        //List 추가하기
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
}
init();