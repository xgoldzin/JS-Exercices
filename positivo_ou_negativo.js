const prompt = require("prompt-sync")()
console.log("Positivo ou negativo?")
console.log()
let num = Number(prompt("Informe o número que deseja saber se é positivo ou negativo:"))
console.log()
if (num < 0){
    console.log(`${num} é negativo`);
}else{
    console.log(`${num} é positivo`);
}