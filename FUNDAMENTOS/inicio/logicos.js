function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, false))
console.log(compras(false,false))


console.clear()

console.log("RENDA MÍNIMA A PARTIR DE 1600")

function salario(salario1, salario2) {

    let salarioMinimo = salario1 + salario2 <=1600;
    let salarioMedio = salario1 + salario2 >= 3000 ;
    let salarioAlto = salario1 + salario2 >= 7000;

    if (salarioMinimo <= 1600){
        console.log(salarioMinimo, " Salario Mínimo é de: " + salarioMinimo)
    }if (salarioMedio >=3000) {
        console.log(salarioMedio, " Salario Médio é de: " + salarioMedio)
    } if (salarioAlto >= 7000) {
        console.log(salarioAlto, " Salario Alto é de: " + salarioAlto)
    }
    
    
    return {salarioMinimo, salarioMedio, salarioAlto}

}

console.log(salario(3000,200))