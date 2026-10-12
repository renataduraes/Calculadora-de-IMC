const btnCalcular = document.getElementById('btnCalcular');
const txtResultado = document.getElementById('resultado');

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        txtResultado.textContent = "Por favor, insira valores válidos e maiores que zero.";
        txtResultado.style.color = "red";
        return; 
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    txtResultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
    txtResultado.style.color = "#28a745";
}

btnCalcular.addEventListener('click', calcularIMC);