const notas = [2, 5.5, 7.9, 10, 8, 4, 6.9]

for (let i in notas){
    console.log(`índice ${i} nota: ${notas[i]}`)
}

const pessoa = {
    nome: "Ana Maria",
    idade: 25,
    profissao: "Analista de Sistemas",
    matricula: 263254
}

for (let atributo in pessoa){
    console.log(`${atributo} ${pessoa[atributo]}`)
}

