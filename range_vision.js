function range_vision(number) {
    if (number < 0) {
        return false;
    }

    const digitos = String(number).split("").map(Number);

    digitos.some((digito, index)=>{
        const digitosIzquierda = digitos.slice(0,index).reverse()
        const valorDeVision = digitosIzquierda.reduce((valorAnterior, valorActual) => {
            return valorAnterior + valorActual;
          }, 0);
        console.log(valorDeVision)
    })

    console.log(digitos);
}

console.log(range_vision(12305))