function tratarErroLancar(erro){
    //Mensagem de retorno de Erro

    throw "Problema no sistema" + " ERRO"
} // SERVE PARA LANÇAR O ERRO, INFORMAÇÕES DE ERRO

function imprimirNomeGritado(obj){
    try{ // É UM BLOCO QUE PODE GERAR ALGUM TIPO DE ERRO
        console.log(obj.name.toUpperCase() + " ...Erro ao gerar");
    }catch(e){ // QUANDO GERAR UM ERRO ELE CAI PARA O CATCH
        tratarErroLancar(e)
    } finally{ // SEMPRE SERÁ EXECUTADO, COM ERRO OU SEM ERRO
        console.log("FIM DE CÓDIGO")
    }
}

const obj = {
    name:" Roberto"
}
imprimirNomeGritado(obj)
