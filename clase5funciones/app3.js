function anterior(numero){
    return numero - 1
}

function triple(numero){
    return numero * 3
}

function anteriorDelTriple(numero){
    let resultado = triple(numero)
    let resultadoTotal = anterior(resultado)
    return resultadoTotal
}

console.log(anteriorDelTriple(3))
