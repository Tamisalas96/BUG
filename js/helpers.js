function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('aqui el texto tiene la cant. de caracteres correcto');
        return true;
    }else{
        console.log('aqui el texto no cumple la validacion');
        return false;
    }
}
export function sumarioValidaciones(nombre,categoria,requisitos,desarrollador,imagen){
    let resumen = '';
    //quiero preguntar si no cumple con la validacion
    if(!validarCantidadCaracteres(nombre,2,100)){
        resumen = 'El titulo debe tener entre 2 y 100 caracteres <br>'
    }

    return resumen;
}