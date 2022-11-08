function escolheTaxi(tf1, vqr1, tf2, vqr2) {

    if (tf1 < tf2 & vqr1 > vqr2) {
        let num = ((tf2 - tf1) / (vqr1 - vqr2));
        let resto = ((tf2 - tf1) % (vqr1 - vqr2));
        if (resto <= 0) {
            n = num.toFixed(1);
        } else {
            n = num.toFixed(2);
        }
        console.log(resto);
        return `Empresa 1 quando a distância < ${n}, Tanto faz quando a distância = ${n}, Empresa 2 quando a distância > ${n}`
    }

    if (tf1 < tf2 & vqr1 <= vqr2) {
        return "Empresa 1";
    }

    if (tf1 > tf2 & vqr1 >= vqr2) {
        return "Empresa 2";
    }

    if (tf1 > tf2 & vqr1 < vqr2) {
        n = (tf1 - tf2) / (vqr2 - vqr1);
        let resto = (tf1 - tf2) % (vqr2 - vqr1);
        if (resto <= 0) {
            n = num.toFixed(1);
        } else {
            n = num.toFixed(2);
        }

        return `Empresa 2 quando a distância < ${n}, Tanto faz quando a distância = ${n}, Empresa 1 quando a distância > ${n}`
    }

    if (tf1 == tf2 & vqr1 < vqr2) {
        return "Empresa 1";
    }

    if (tf1 == tf2 & vqr1 > vqr2) {
        return "Empresa 2";
    }

    if (tf1 == tf2 & vqr1 == vqr2) {
        return "Tanto faz";
    }


}


console.log(escolheTaxi("2.5", "1.0", "5.0", "0.75"));