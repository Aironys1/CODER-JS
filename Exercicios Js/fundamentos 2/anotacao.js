console.log(typeof console) // tipo do console
console.log(Math.ceil(1.2)) // Arredonda pra cima
console.log(Math.floor(5.4)) // Arredonda pra baixo

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log("Executando...")
    }
}

const obj2 = new Obj("Vamos aprender JS");
const obj3 = new Obj("Estudar e estudar");

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec();