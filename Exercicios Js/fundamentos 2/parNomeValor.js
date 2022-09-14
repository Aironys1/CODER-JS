// par nome/ valor

const saudacao = "Seja bem vindo";

function exec(){
    const saudacao = "Fala programador..."
    return saudacao
}



// O bejetos são grupos aninhados de pares nome/ valor
const cliente  = {
    nome: "Amanda",
    idade: 25,
    cargo : "Analista de Sistemas",
    endereco:{
        logradouro: "Rua São Francisco",
        numero:156
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.nome, cliente.cargo, cliente.endereco.logradouro, cliente.endereco.numero)