const prompt = require("prompt-sync")()
console.log("CÁLCULO DAS RAÍZES DE BHASKARA")
console.log()
let var_a = Number(prompt("Informe o valor de 'a':"))
if (var_a == 0){
    console.log("Esta não é uma equação do segundo grau")
    process.exit()
}
let var_b = Number(prompt("Informe o valor de 'b':"))
let var_c = Number(prompt("Informe o valor de 'c':"))
console.log()
let delta = ((var_b ** 2) - 4 * var_a * var_c )
if(delta < 0){
    console.log("Essa equação não tem números reais, ou seja, suas raízes são números complexos.")
    process.exit()
}
const x1 = (- var_b - (delta**0.5)) / (2 * var_a)
console.log(x1.toFixed(2))
const x2 = (- var_b + (delta**0.5)) / (2 * var_a)
console.log(x2.toFixed(2))

