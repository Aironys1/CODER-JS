const prod1 = {}

console.log(prod1)

prod1.nome = "Geladeira";
prod1.preco = 3599.99;
console.log(prod1)

prod1["PROMOÇÃO BLACK FRIDAY"] = {
    nome:"Fogão",
    preco: 1999.99
}
console.log(prod1)
console.log(prod1["PROMOÇÃO BLACK FRIDAY"])


const funcionarios ={
    nome: "Eduardo Dias",
    salario:2415,
    cargo: "Analista de Sistemas",
    funcionarios2:{
        nome: "Francisco Alves",
        salario: 3560,
        cargo: "Suporte Técnico"
    }
    }



console.log(funcionarios)
console.log(funcionarios.funcionarios2)