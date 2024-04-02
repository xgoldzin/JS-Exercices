const cpf = "706.409.871-76"
let cpfNumerico = cpf.replace(/\D/g, "");
leitura_cpf = cpfNumerico.length
if (leitura_cpf != 11){
    console.log("Insira um CPF válido com 11 dígitos")
}