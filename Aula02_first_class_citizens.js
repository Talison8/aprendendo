function somar(num1,num2){
    return num1+num2;
}

//tem dois modos de chamar a função 
const res = somar(4,2);
console.log(res);

console.log(somar(65,10));

//motivos pelo o qual as function são first class citizens
///Exemplo 1

const executar = somar;
console.log(executar(3,7));

//Exemplo 2
//executar função dentro de função
function subtrair(num1,num2){
    return(num1-num2);
}

function pegar(num1, num2, fun){
   return fun(num1,num2);
}

console.log(pegar(34,21,subtrair));
console.log(pegar(34,21,somar));

//Exemplo 3
function ou(z){//apenas retornando a propria função
    return z;
}

const ret = ou(somar);
console.log(ret(6,7));

function mensagem(){
    console.log('hj melhor do que ontem.');
}

let m = mensagem();
//console.log(m());//kkkkkk

let valores = [1, 2, false, subtrair];

for( let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}