// Função sem retorno
function soma(a,b){
    console.log(a+b); 
}
soma(10,5)


function multiplicar(a,b){
    console.log(a*b);
}
multiplicar(2,6)

let saldo  = 1000;

// Função com retorno

function subtrair(a,b=10){
    return a - b;
}

console.log(subtrair(5,1))
console.log(subtrair(2))