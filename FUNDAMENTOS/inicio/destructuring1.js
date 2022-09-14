const pessoa = {
    nome: "Ana Júlia",
    idade: 21,
    endereco:{
        logradouro: "Rua São José",
        numero:146
    }
}

console.log(pessoa)

const {nome, idade} = pessoa
console.log(pessoa.nome, pessoa.idade)

console.log(nome, idade)

const {nome: n, idade:i} = pessoa
console.log(n,i)

const {endereco:{logradouro, numero, cep= '04425010'}} = pessoa
console.log(logradouro, numero, cep)