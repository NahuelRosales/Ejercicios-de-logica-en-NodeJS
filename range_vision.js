function range_vision(number) {
    if (number < 0) {
        return false;
    }

    const digitos = String(number).split("").map(Number);

    digitos.some((digito, index)=>{
        const digitosIzquierda = digitos.slice(0,index).reverse()
        const digitosDerecha = digitos.slice(index+1)
        const valorDeVision = digitosDerecha.reduce((valorAnterior, valorActual) => {
            return valorAnterior + valorActual;
          }, 0);
        console.log(valorDeVision)
    })


}

console.log(range_vision(12305))