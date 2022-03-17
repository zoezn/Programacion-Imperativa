function agregarHttp(url) {
    return 'http://' + url
}


function procesar(array,callback){
    let urlCompletas = []
    for (let i = 0; i < array.length; i++) {
        urlCompletas.push(callback(array[i]))
    }
    return urlCompletas
}

console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp)) 
