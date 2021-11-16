//Crear metodo para eliminar un elemento de un arreglo

function eliminarElemento(arreglo,valor){
    return arreglo.filter((elemento)=>{
        return elemento != valor;
    })
}
let numeros = [1,2,3,4,5];

console.log(eliminarElemento(numeros,4));