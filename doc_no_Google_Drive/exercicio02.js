//Crie um programa que peça o nome e a idade de uma pessoa e diga quantos dias essa pessoa já viveu (considere que um ano tem 365 dias)

const prompt = require('prompt-sync')();

idade = parseInt(prompt("Quantos anos você tem? "))

diasVividos = idade * 365

console.log(`Você viveu até seu aniversário de ${idade} anos, ${diasVividos} dias`)