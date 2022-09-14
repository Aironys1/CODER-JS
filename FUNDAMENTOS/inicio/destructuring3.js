function rand({min=1, max=25}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const obj = {max: 25, min: 1}
console.log(rand(obj))
