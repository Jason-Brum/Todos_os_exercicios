//Crie uma expressão matemática que envolva ao menos três operadores aritméticos diferentes e mostre como a mudança de parênteses altera o resultado final.


const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o valor de a: "));
let b = parseFloat(prompt("Digite o valor de b: "));
let c = parseFloat(prompt("Digite o valor de c: "));
let d = parseFloat(prompt("Digite o valor de d: "));

let resultadoSemParenteses = a + b * c - d;
let resultadoComParenteses = (a + b) * (c - d);

console.log(`Resultado sem parênteses: ${resultadoSemParenteses}`);
console.log(`Resultado com parênteses: ${resultadoComParenteses}`);

