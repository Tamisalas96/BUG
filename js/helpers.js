function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('aqui el texto tiene la cant. de caracteres correcto');
        return true;
    }else{
        console.log('aqui el texto no cumple la validacion');
        return false;
    }
}
function validarURLImagenes(texto){
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/
    console.log(typeof patron);
     if(patron.test(texto)){
         console.log('la expresion regular fue valida');
         return true;
     }else{
         console.log('no cumplio con la expresion regular');
         return false;
     }
 }
export function sumarioValidaciones(nombre,categoria,descripcion,requisitos,desarrollador,imagen){
    let resumen = '';
    //quiero preguntar si no cumple con la validacion
    if(!validarCantidadCaracteres(nombre,2,100)){
        resumen = 'El titulo debe tener entre 2 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(descripcion,2,100)){
        resumen = 'La categoria debe tener entre 3 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(categoria,2,100)){
        resumen = 'La categoria debe tener entre 3 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(requisitos,2,100)){
        resumen = 'Los requisitos debe tener entre 4 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(desarrollador,2,100)){
        resumen = 'El Desarrolador debe tener entre 5 y 100 caracteres <br>'
    }
    if(!validarURLImagenes(imagen)){
        resumen += 'Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    return resumen;
}