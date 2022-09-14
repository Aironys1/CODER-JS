let titulo = document.getElementById ("title");


titulo.innerHTML = "Sejam bem vindos"; 
titulo.style = 'color:white; font-size:25px; background-color:black; font-weight:bold; text-align:center; padding:50px';


function soma(a,b) {
    
    soma = 10 + 20
    return (a,b)
}
soma();
console.log(soma);


const materiais = [
    "Cimento",
    "Areia",
    "Agua",
    "Pedra",
    "Carrinho"
];
 
document.write((materiais.map(material => material.length)));


