//setting Animation
function showSetting (){
    let settingSections = document.querySelector('.setting');
    settingSections.classList.toggle('active');
}

//Theme-Colors
let themeColor = localStorage.getItem('theme-color');
if(themeColor !== null){
    console.log("not-empty",localStorage.getItem('theme-color'))
    document.documentElement.style.setProperty('--primary-color', localStorage.getItem('theme-color'));
}
const colors = document.getElementsByClassName('colors');
let i;
for(i=0; i<colors.length; i++){
    colors[i].addEventListener('click',changeColor)
}

function changeColor(){
    let color = this.getAttribute('data-color');
    localStorage.setItem('theme-color',color);
    document.documentElement.style.setProperty('--primary-color', color);
}
