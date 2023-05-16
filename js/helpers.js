function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        return true;
    }else{
        return false;
    }
}
function validarURLImagenes(texto){
    const patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|gif)$/
    console.log(typeof patron);
     if(patron.test(texto)){
         return true;
     }else{
         return false;
     }
 }
 function validacionPrecio(precio){
    if(precio > 99 && precio < 1000000){
        return true;
    }else{
        return false;
    }
}
function validacionCategoria(categoria){
    if(categoria.length > 0 
    && categoria === 'sandbox' 
    || categoria === 'simulacion' 
    || categoria === 'fabricacion' 
    || categoria === 'construccion' 
    || categoria === 'aventura')
    {    return true
    }else{
        return false
    }
}

 export function sumarioValidaciones(nombre,descripcion,categoria,precio,imagen,desarrollador, requisitos){
    let resumen = '';
    // si no cumple con la validacion
    if(!validarCantidadCaracteres(nombre,2,50)){
        resumen = '- El Nombre debe tener entre 2 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(descripcion,5,500)){
        resumen += '- La Descripcion debe tener entre 5 y 500 caracteres <br>'
    }
    if(!validacionCategoria(categoria)){
        resumen += '- Tiene que seleccionar una categoria <br>'
    }   
    if(!validacionPrecio(precio)){
        resumen += '- El precio debe ser entre 100 y 999999 <br>'
    }
    if(!validarURLImagenes(imagen)){
        resumen += '- Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validarCantidadCaracteres(desarrollador,3,50)){
        resumen += '- El Desarrolador debe tener entre 3 y 50 caracteres <br>'
    }
    if(!validarCantidadCaracteres(requisitos,5,500)){
        resumen += '- Los requisitos debe tener entre 5 y 500 caracteres <br>'
    }
    return resumen;
}