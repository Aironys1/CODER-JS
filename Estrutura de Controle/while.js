function pegarInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 1

while (opcao != 0 ){
    opcao = pegarInteiroAleatorioEntre(0,25)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log("Até a próxima")

