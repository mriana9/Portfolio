//setting Animation
function showSetting (){
    let settingSections = document.querySelector('.setting');
    settingSections.classList.toggle('active');
}

//Theme-Colors
const colors = document.getElementsByClassName('colors');
let i;
for(i=0; i<colors.length; i++){
    colors[i].addEventListener('click',changeColor)
}

function changeColor(){
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--primary-color', color);
}

function getColorData(){
    localStorage.getItem('theme-color');
    console.log(localStorage.getItem('theme-color'));
}

