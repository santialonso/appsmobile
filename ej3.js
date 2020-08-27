// Escribir el código de una función a la que se pasa como parámetro un 
//número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.


function numero (num){

    if (num % 2 === 0){
        return("este numero es par");
    }else{
        return("este numero es impar");
    }
    console.log(numero(2));
}