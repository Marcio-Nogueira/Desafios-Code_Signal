function calculaTotalLeds(altura, largura) {

    // let x = largura + 1;
    // let y = altura + 1;
    let qtdDeLed = altura * largura + altura + largura + 1;

    return qtdDeLed;
}

let altura = 2;
let largura = 3;

console.log(calculaTotalLeds(altura, largura));