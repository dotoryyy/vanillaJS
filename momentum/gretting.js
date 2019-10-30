const form = document.querySelector('.js-form'),
    input = document.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function askForName() {
    //유저가 없으면 유저 이름을 요청함
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function loadname() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //유저 없음
        askForName();
    } else{
        //유저 있음
        paintGreeting(currentUser);
    }
}

function init() {
    loadname();
}

init();