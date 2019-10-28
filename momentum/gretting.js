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

function loadname() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //유저 없음
    } else{
        //유저 있음
        paintGreeting(currentUser);
    }
}

function init() {
    loadname();
}

init();