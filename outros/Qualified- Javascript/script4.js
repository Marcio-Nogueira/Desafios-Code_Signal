function checaNumeroEscondido(numero, numeroOculto) {

    let stringNumero = numero.toString();
    let stringOculto = numeroOculto.toString();
    let stringCompare = undefined;

    for (let i = 0; i < stringNumero.length; i++) {
        for (let j = 0; j < stringOculto.length; j++) {
            if (stringNumero[i] == stringOculto[j]) {
                stringCompare += (stringOculto[j]);
            }
        }
    }
    const strNum = stringCompare.replace(undefined, '');

    if (stringOculto == strNum) {
        return true;
    } else {
        return false;
    }
}

numero = 12345;

numeroOculto = 345;

console.log(checaNumeroEscondido(numero, numeroOculto));