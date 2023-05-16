let btnThemeLight = document.querySelector('#btnThemeLight')
let btnThemeDark = document.querySelector('#btnThemeDark')

btnThemeLight.addEventListener('click', ()=>cambiarTema('light'));
btnThemeDark.addEventListener('click', ()=>cambiarTema('dark'));

let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';

cambiarTema(temaConfigurado);

function cambiarTema(color){

document.querySelector('html').setAttribute('data-bs-theme', color);

let iconoTema = document.querySelector("i");
    if(color === 'dark'){
        iconoTema.classList.add('fa-sharp')
        iconoTema.classList.add('fa-solid')
        iconoTema.classList.add('fa-moon')
        iconoTema.classList.remove('fa-regular')
        iconoTema.classList.remove('fa-sun')
    };
    if(color === 'light'){
        iconoTema.classList.add('fa-regular')
        iconoTema.classList.add('fa-sun')
        iconoTema.classList.remove('fa-sharp')
        iconoTema.classList.remove('fa-solid')
        iconoTema.classList.remove('fa-moon')
    };
localStorage.setItem('tema', JSON.stringify(color));
}