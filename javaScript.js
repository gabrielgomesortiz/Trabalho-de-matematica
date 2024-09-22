function dadosHTML() {
    let selctionCidades = document.getElementById("selctionCidades").value;
    let MetrosCubicus = parseFloat(document.getElementById("MetrosCubicus").value);
    if (isNaN(MetrosCubicus)) {
        alert("Não foi possível realizar o cálculo, Tente Novamente");
    }
        let desmembrarNumero = desmenbraNum(MetrosCubicus);
        let funcaoCalcAgua = calcAgua(selctionCidades, MetrosCubicus, desmembrarNumero);
        document.getElementById("saida").value = funcaoCalcAgua;
    }
function desmenbraNum(MetrosCubicus) {
    let resp = [];
    const faixas = [5, 5, 5, 5, 10];

    for (let i = 0; i < faixas.length; i++) {
        if (MetrosCubicus > faixas[i]) {
            resp.push(faixas[i]);
            MetrosCubicus -= faixas[i];
        } else {
            resp.push(MetrosCubicus);
            MetrosCubicus = 0;
            break;
        }
    }

    if (MetrosCubicus > 0) {
        resp.push(MetrosCubicus);
    }

    return resp.slice(1);
}
function limparCampos(){
    document.getElementById("MetrosCubicus").value=''
}
function calcAgua(selctionCidades, MetrosCubicus, resp) {
    let resultado = '';
    if (selctionCidades === 'Curitiba') {
        resultado ='Você usou: '+ MetrosCubicus +' m³, então sua conta de água foi: R$ ' + calcContaCuritiba(resp, MetrosCubicus);
        limparCampos()
    } else if (selctionCidades === 'DemaisLocalidades') {
        resultado ='Você usou: '+ MetrosCubicus +' m³, então sua conta de água foi: R$ ' + calcContaDemaisLocalidades(resp, MetrosCubicus);
        limparCampos()
    }
    return resultado;
}

function calcContaCuritiba(resp, MetrosCubicus) {
    let taxaFixa = 93.27;
    let conta = taxaFixa;


    if (MetrosCubicus > 5 && MetrosCubicus <= 10) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.85);
    }

    if (MetrosCubicus > 10 && MetrosCubicus <= 15) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.85);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.85);
    }

    if (MetrosCubicus > 15 && MetrosCubicus <= 20) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.85);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.85);
        conta += (resp[2] * 8.73) + (resp[2] * 8.73 * 0.85);
    }

    if (MetrosCubicus > 20 && MetrosCubicus <= 30) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.85);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.85);
        conta += (resp[2] * 8.73) + (resp[2] * 8.73 * 0.85);
        conta += (resp[3] * 8.81) + (resp[3] * 8.81 * 0.85);
    }

    if (MetrosCubicus > 30) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.85);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.85);
        conta += (resp[2] * 8.73) + (resp[2] * 8.73 * 0.85);
        conta += (resp[3] * 8.81) + (resp[3] * 8.81 * 0.85);
        conta += (resp[4] * 14.90) + (resp[4] * 14.90 * 0.85);
    }

    return conta.toFixed(2);
}
function calcContaDemaisLocalidades(resp, MetrosCubicus) {
    let taxaFixa = 90.75;
    let conta = taxaFixa;

    if (MetrosCubicus > 5 && MetrosCubicus <= 10) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.8);
    }

    if (MetrosCubicus > 10 && MetrosCubicus <= 15) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.8);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.8);
    }

    if (MetrosCubicus > 15 && MetrosCubicus <= 20) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.8);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.8);
        conta += (resp[2] * 8.73) + (resp[2] * 8.73 * 0.8);
    }

    if (MetrosCubicus > 20 && MetrosCubicus <= 30) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.8);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.8);
        conta += (resp[2] * 8.73) + (resp[2] * 8.73 * 0.8);
        conta += (resp[3] * 8.81) + (resp[3] * 8.81 * 0.8);
    }

    if (MetrosCubicus > 30) {
        conta += (resp[0] * 1.56) + (resp[0] * 1.56 * 0.8);
        conta += (resp[1] * 8.69) + (resp[1] * 8.69 * 0.8);
        conta += (resp[2] * 8.73) + (resp[2] * 8.73 * 0.8);
        conta += (resp[3] * 8.81) + (resp[3] * 8.81 * 0.8);
        conta += (resp[4] * 14.90) + (resp[4] * 14.90 * 0.8);
    }

    return conta.toFixed(2);
}