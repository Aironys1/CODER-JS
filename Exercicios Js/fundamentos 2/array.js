const valores = [10,5.2,15,48,2,3,45]

console.log(valores)
console.log(valores[0])
console.log(valores[1] = 100) // atribuindo o valor 100 no array de index 1
console.log(valores.length)

valores.push({
    nome:"Aironys",
    idade:31,
    cargo:"Web Developer"
})   // adicionando ao final do array um objeto

console.log(valores[7])
console.log(valores[7].idade)
valores.push(777)
console.log(valores.length) // tamanho total do array
console.log(valores)
valores.pop() // Removendo o ultimo valor
console.log(valores.length)
console.log(valores)

delete valores[1] // Deletando o valor no index 1
console.log(valores)