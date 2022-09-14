let contador = 1;
while (contador <=10){
    console.log(`contador = ${contador}`)
    contador ++
}

for (let i = 0; i<=10; i++) {
    console.log(`i = ${i}`)
    
}

const notas = [6.5, 10, 8.6, 4.5, 5, 3.5, 7.5, 4, 0]

for(i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
    
    if(notas[i] >=7){
        console.log(`Voce foi aprovado com a nota ${notas[i]}` + '\n \n')
    
    } 
    else if(notas[i] >=4){
        console.log(`FICOU DE RECUPERAÇÃO ${notas[i]}` + '\n \n')
    }
    else{
        console.log(`Voce REPROVOU com a nota ${notas[i]}` + '\n \n')

    }
}

