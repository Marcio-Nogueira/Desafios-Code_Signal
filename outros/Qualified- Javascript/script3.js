function calculaPorcentagemSorteio(assinante, minutosAssistidos) {

    //minutos em horas
    let horasAssistidas = minutosAssistidos.map(x => Math.ceil(x / 60));
    console.log(horasAssistidas);
    pesoSorteio = [];
    for (let i = 0; i < horasAssistidas.length; i++) {
        if (assinante[i] == true) {
            pesoSorteio.push(horasAssistidas[i] * 2);
        } else {
            pesoSorteio.push(horasAssistidas[i]);
        }
    }
    percentualDeChances = [];
    let totalDeHorasPeso = pesoSorteio.reduce((total, a) => total + a, 0);
    console.log(totalDeHorasPeso);
    for (let i = 0; i < pesoSorteio.length; i++) {
        percentualDeChances.push(Math.round((pesoSorteio[i] * 100) / totalDeHorasPeso));
    }
    console.log(percentualDeChances);
    return percentualDeChances;
}

minutosAssistidos = [60, 120];
assinante = [true, false];
calculaPorcentagemSorteio(assinante, minutosAssistidos);