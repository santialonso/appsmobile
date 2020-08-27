//5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. 
//Un alumno aprobó si todas sus notas son mayores o iguales a 4

//aprobo([8,6,2,4])
//> False
function aprobo(notas){

    if (notas >=4){
        return "aprobo";
    }else{
        return "no aprobo";
    }
    console.log(notas);
}