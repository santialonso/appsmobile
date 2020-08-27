/*9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen

rechazar even [7,9,87,42]
> [7, 9, 87]
*/


var rechazar = [4,3,6,8];

console.log(rechazar.filter(i => i %2 ===1));
