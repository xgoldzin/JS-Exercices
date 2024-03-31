const prompt = require("prompt-sync")()
console.log('O NÚMERO É DIVISÍVEL POR 2,3 OU 5?')
console.log()
let num = Number(prompt("Insira um número para a verificação:"))
console.log()
if (num%2 == 0){
    console.log("O número é par")
}
else{
    console.log("O número é ímpar")
}