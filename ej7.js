//7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo

//hayAlgunNegativo [2,-3,9]
//> True

function hayAlgunNegativo(arr){
    var arr = [1,3,5,-5];
    const hayAlgunNegativo= (element) => element <0;
    console.log(arr.some(hayAlgunNegativo));
    
}   