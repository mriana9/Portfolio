//setting Animation
function showSetting() {
    let settingSections = document.querySelector('.setting');
    settingSections.classList.toggle('active');
}

//Theme-Colors & Texts
let themeColor = localStorage.getItem('theme-color');
if (themeColor !== null) {
    document.documentElement.style.setProperty('--primary-color', localStorage.getItem('theme-color'));
}

let themeText = localStorage.getItem('theme-text');
if (themeColor !== null) {
    document.documentElement.style.setProperty('--primary-text', localStorage.getItem('theme-text'));
}

const colors = document.getElementsByClassName('colors');
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changeColor)
}

function changeColor() {
    let color = this.getAttribute('data-color');
    localStorage.setItem('theme-color', color);
    document.documentElement.style.setProperty('--primary-color', color);
}

const texts = document.getElementsByClassName('text');
for (let i = 0; i < texts.length; i++) {
    texts[i].addEventListener('click', changeText)
}

function changeText() {
    let text = this.getAttribute('data-text');
    localStorage.setItem('theme-text', text);
    document.documentElement.style.setProperty('--primary-text', text);
}