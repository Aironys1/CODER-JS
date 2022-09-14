const nome = "Aironys";
let cargo = "Desenvolvedor Web"


console.log(nome.charAt(0)) // Pega a letra a partir do indice 0
console.log(nome.charAt(4)) // Pega a letra a partir do indice 4

console.log(nome.charCodeAt('0')) // Pega a letra pelo indice e mostrando o valor na tabela ASCII

console.log(nome.indexOf('s')) // Mostrando onde fica a letra no index = index = 6

console.log(nome.length) // Tamanho total de index = 7
console.log(nome.replace('A', 1)) // pegando uma letra e alterando ela pelo numero 1

console.log("Amanda, Fernanda, Allan, Gabriel".split(',')) //Separando por virgula cada nome

console.log(nome.substring(1)) // Començando pelo index 1
console.log("Meu nome é ".concat(nome) + " Cargo: "  .concat(cargo))