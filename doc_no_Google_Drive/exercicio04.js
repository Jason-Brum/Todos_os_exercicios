//Crie um algoritmo que peça o raio de um círculo e calcule a área e o perímetro do círculo.(JS)

const prompt = require('prompt-sync')();

const raio = parseFloat(prompt("Digite o raio do círculo: "));

if (isNaN(raio) || raio <= 0) {
    console.log("Por favor, insira um valor numérico válido e positivo para o raio.");
} else {
    const pi = Math.PI; // valor aproximado de pi
    const area = pi * Math.pow(raio, 2); // calcula a área
    const perimetro = 2 * pi * raio; // calcula o perímetro

    console.log(`A área do círculo é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}.`);
}
