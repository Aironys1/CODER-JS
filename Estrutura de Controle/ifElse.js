const imprimirNota = function(nota) {
    if(nota >=7){
        console.log("Aprovado!!! com a nota: " + nota);
    }else{
        console.log("Reprovado!!! com a nota: " + nota);
    }
}

imprimirNota(2)
imprimirNota(7)