const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in num1) {
    if (x == 5){
        break
    }
    console.log(`${x} = ${num1[x]}`)
}

console.log('\n\n')

for (y in num1) {
    if (y == 5){
        continue
    }
    console.log(`${y} = ${num1[y]}`)
}

externo: for (a in num1) {
    for (b in num1) {
        if( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('\n\n','FIM !!!')
console.log('\n\n', '.............')