// Variavel valor é global
{
    {
        {
            var valor = 500;
        }
    }
}

console.log(valor);

// Variavel teste dentro do escopo

function teste() {
    var testando = "Aqui é um teste"
    console.log(testando);
}
teste();
