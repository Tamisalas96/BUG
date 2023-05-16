let btnThemeLight = document.querySelector('#btnThemeLight')
let btnThemeDark = document.querySelector('#btnThemeDark')

btnThemeLight.addEventListener('click', ()=>cambiarTema('light'));
btnThemeDark.addEventListener('click', ()=>cambiarTema('dark'));

let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';

cambiarTema(temaConfigurado);

function cambiarTema(color){
    console.log(color)
document.querySelector('html').setAttribute('data-bs-theme', color);
localStorage.setItem('tema', JSON.stringify(color));
}