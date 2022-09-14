for (var i = 0; i <10; i++){
    console.log("i = " + i)
}


console.log("i = " + i)

const contador = []

for (var i =0 ; i <10; i++){
    contador.push(function(){
        console.log("Contador = " + i)
    })
}

contador[2]();
contador[8]();