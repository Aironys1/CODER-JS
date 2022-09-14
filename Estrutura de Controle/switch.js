const imprimirResultado = function (nota) {
  switch (Math.ceil(nota)) {
    case 10:
    case 9:
      console.log('Quadro de Honrra')
      break
    case 8:
    case 7:
      console.log(' Aprovado ' + nota)
      break

    case 6:
    case 5:
    case 4:
      console.log(' Recuperação ' + nota)
      break

    case 3:
    case 2:
    case 1:
    case 0:
      console.log(' Reprovado ' + nota)
      break

    default:
      console.log(' Nota inválida ' + nota)
  }
}

imprimirResultado(8)
imprimirResultado(2.8)
imprimirResultado(6.3)
imprimirResultado(8.1)
imprimirResultado(3.9)
imprimirResultado(-15)
imprimirResultado(25)

console.log('\n\n','FIM !!!')
console.log('\n\n', '.............')