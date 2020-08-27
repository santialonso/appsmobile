/*8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen

// even es una función que retorna true si un número es par (deben crearla)
cuantosCumplen even [7,9,25,42]
> 1 //Solo 42 es par
*/


var even = [2,4,7,5];

console.log(even.filter (i=>i %2 ==0));
