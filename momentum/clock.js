const clockContainer = document.querySelector(".js-click");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {

};

init();