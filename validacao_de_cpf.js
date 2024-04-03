const cpf = "706.409.871-76"
const cpf2falso = "706.409.871.77"
const cpf3falso1 = "706.409.871.86"

resolve(cpf)
resolve(cpf2falso)
resolve(cpf3falso1)

function valida_cpf(cpf){
    let cpfNumerico = cpf.replace(/\D/g, "");
    leitura_cpf = cpfNumerico.length
    cpf_num = parseInt(cpfNumerico)

    if (leitura_cpf != 11) return false;
    
    let digito_sep = cpfNumerico.split('')
    let cpf_final = digito_sep.map(str => parseFloat(str))
    let [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11] = cpf_final
    let soma1 = (((num1 * 10) + (num2 * 9) + (num3 * 8) + (num4 * 7) + (num5 * 6) + (num6 * 5) + (num7 * 4) + (num8 * 3) + (num9 * 2)) * 10)

    if (soma1 % 11 !== num10) return false;
    
    let soma2 = (((num1 * 11) + (num2 * 10) + (num3 * 9) + (num4 * 8) + (num5 * 7) + (num6 * 6) + (num7 * 5) + (num8 * 4) + (num9 * 3) + (num10 * 2)) * 10)

    if ( soma2 % 11 !== num11) return false;
    
    return true;
}

function resolve(cpf){
    let result = valida_cpf(cpf)

    if (result == false){
        console.log("CPF Inválido")
    }else{
        console.log("CPF válido")
    }
}