//4- Define una función que dado un array de números nos dice si alguno es par.

//algunoEsPar([1,2,3])
//> true

function algunoespar(num){
    var arr = [1,2,3];
    if (arr.some (i=>i % 2 === 0)){
    console.log("alguno es par " + num );
    }else{
    console.log("ninguno es par" + num);
    }


}


