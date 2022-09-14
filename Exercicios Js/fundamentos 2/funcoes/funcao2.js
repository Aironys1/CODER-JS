// Armazenando um função em uma variável

const imprimirSoma = function(a,b){
    console.log(a + b)
}
imprimirSoma(25,2)

// Armazenando um função arrow em uma variável

const soma = (a,b) => {
    return a * b
}

console.log(soma(10,2))

// retorno implicito 
const subracao = (a,b) => a - b 
console.log(subracao(450,15))
