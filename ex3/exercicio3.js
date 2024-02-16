
const {gets, print} = require('./funcoes-auxiliares-ex3.js');

const valorSalario = 5500;
const valorBeneficios = 250;

function calcularPorcentagem(valor,percentual){
    return valor * (percentual / 100);
}

function pegarAliquota(salario){
    if(salario >= 0 && salario <= 1100){
        return 5;
    } else if(salario >=1100.01 && salario <= 2500){
        return 10;
    } else{
        return 15;
    }
}

const aliquotaDoImposto = pegarAliquota(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario,aliquotaDoImposto);
const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir);