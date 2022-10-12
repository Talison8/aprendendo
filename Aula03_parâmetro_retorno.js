//var nascimento = prompt('em que ano vc nasceu?')

function calcular_idade(ano_nascimento){
    const data = new Date();//gera a data atual
    const idade =data.getFullYear() - ano_nascimento;
    return idade;
}

var ano = calcular_idade(1899);
//console.log(ano);

//let d = new Date();
//console.log(d);

function calcular_idade2(ano_nascimento){
    const data = new Date();//gera a data atual
    const idade = data.getUTCFullYear() - ano_nascimento;
   console.log(idade);
}
//var idade2 = calcular_idade2(1999)

const dat = new Date();
//console.log(dat.getUTCFullYear());
//console.log(dat.getUTCDate());

function somar(num1, num2){
    return num1 + num2;
}

//fique esperto!!
console.log(somar(2,3));//5
console.log(somar(2)); //nan
console.log(somar(2,3,2,4,5));//5
console.log(somar(2,3,'d'));//5