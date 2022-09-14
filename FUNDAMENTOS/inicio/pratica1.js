let pessoa = {
    nome: "Ana Paula",
    idade: 31,
    mensagem: function() {
        return `Meu nome é : ${this.nome}`
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.mensagem())




let a = 10;
global.b = 200
console.log(this.a)
console.log(global.a)
console.log(a)
console.log(b)