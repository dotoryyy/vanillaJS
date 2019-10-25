const title = document.querySelector('#title');
//title이라는 상수에 #title을 넣기

const CLIKED_CLASS = 'clicked';
//CLIKED_CLASS라는 상수에 cliked저장 (나중에 class로 쓸거)

function handleClick() {
    const hasClass = title.classList.contains(CLIKED_CLASS);
    //#title이 CLIKED_CLASS('.cliked')를 포함하고 있는지
    title.classList.toggle(CLIKED_CLASS);
};

function init() {
    title.addEventListener('click', handleClick);
    //#title을 클릭하면 handleClick함수 실행
}
init();