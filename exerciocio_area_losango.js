const prompt = require("prompt-sync")()
console.log("CÁLCULO DA ÁREA DE UM LOSÂNGULO")
console.log()
let maior = Number(prompt("Informe qual o valor do maior lado do losango:"))
let menor = Number(prompt("Informe qual o valor do menor lado do losango:"))
console.log()
let resultado = (maior*menor) / 2
console.log(resultado)


