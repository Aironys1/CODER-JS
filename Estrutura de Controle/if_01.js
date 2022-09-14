function boaNoticia(nota){
    if(nota >=7){
        console.log("Você foi aprovado, com a nota: " + nota.toFixed(1) );
    }
}

boaNoticia(8.5)
boaNoticia(5.5)

function seForVerdade(nota){
    if(nota){
        console.log("SIM, É VERDADE")
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)

seForVerdade(5)
seForVerdade([])
seForVerdade({})
seForVerdade(-15)