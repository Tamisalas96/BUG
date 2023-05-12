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
 function validacionPrecio(precio){
    if(precio >= 100 && precio <= 999999){
        return true;
    }else{
        return false;
    }
}
function validacionCategoria(categoria){
    if(categoria.length > 0 
    && categoria === 'sandbox' 
    || categoria === 'simulación' 
    || categoria === 'fabricación' 
    || categoria === 'construcción' 
    || categoria === 'aventura')
    {    return true
    }else{
        return false
    }
}

 export function sumarioValidaciones(nombre,categoria,descripcion,requisitos,desarrollador,imagen){
    let resumen = '';
    //quiero preguntar si no cumple con la validacion
    if(!validarCantidadCaracteres(nombre,2,50)){
        resumen = '- El titulo debe tener entre 2 y 100 caracteres <br>'
    }
    if(!validarCantidadCaracteres(descripcion,2,500)){
        resumen += '- La Descripcion debe tener entre 3 y 500 caracteres <br>'
    }
    if(!validarCantidadCaracteres(requisitos,5,200)){
        resumen += '- Los requisitos debe tener entre 5 y 200 caracteres <br>'
    }
    if(!validarCantidadCaracteres(desarrollador,3,50)){
        resumen += '- El Desarrolador debe tener entre 3 y 50 caracteres <br>'
    }
    if(!validarURLImagenes(imagen)){
        resumen += '- Debe ingresar una url de imagen valida, con terminacion (.jpg, .png, .gif) <br>'
    }
    if(!validacionPrecio(precio)){
        resumen += '- El precio debe ser entre 100 y 999999 <br>'
    }
    if(!validacionCategoria(categoria)){
        resumen += '- Tiene que seleccionar una categoria <br>'
    }
    
    return resumen;
}