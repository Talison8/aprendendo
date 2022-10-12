function somar1(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
return soma;
}

//console.log(somar1());//0
///console.log(somar1(1,4,6,7));
///console.log(somar1(3,4));
///console.log(somar1(8,65));

function imprime_valores(num1,num2){
   for(let i in arguments){
   //console.log(arguments[i]);
   }
}

imprime_valores(2,3,4,5,6);
imprime_valores(2,3,4);

//valor padrão

//gambiarra 1
function soma2(num1,num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

//console.log(soma2(3,5,7));///15
//console.log(soma2());///2
//console.log(soma2(3));//8 
//console.log(soma2(3,0,7));//12 calculo errado pois pegou valor 2 do num2 e subtituiu o 0

//console.log(soma2('a', 'b', 'c'));//abc  aqui apenas concatena
//console.log(soma2(true, false, 'c'));//aqui true vale 1 + valor padrão de num2 pois false vale 0 e zero aqui é subtituido
//console.log(soma2(2, true, false));//aqui é 2 + 1 + num3

//gambiarra 2

function soma3 (num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    return num1 + num2 + num3;
}

//console.log(soma3(3,5,7));///15
//console.log(soma3());///2
//console.log(soma3(3));//8 
//console.log(soma3(3,0,7));//10 aqui ja resolve o erro do zero ser subistituido

//console.log(soma3('a', 'b', 'c'));//aqui subtituiu
//console.log(soma3(true, false, 'c'));//aqui subtituiu o 'c' por 3 e somou mais 1 do true:4
///console.log(soma3(2, true, false));//aqui somou 2 + 1 do true

// Forma atual - Recomendada

function soma4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

///console.log(soma4(3,5,7));///15
///console.log(soma4());///2
///console.log(soma4(3));//8 
///console.log(soma4(3,0,7));//10

//console.log(soma4('a', 'b', 'c'));//abc  aqui apenas concatena
//console.log(soma4(true, false, 'c'));//1c aqui true vale 1 e false vale 0 e junta o c
//console.log(soma4(2, true, false));//3 aqui 2 mais 1 do true

/**
 em javascript 1 é considerado true e 0 é considerado false
 */

 function soma5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possivel efetuar a soma.';
    }
 }

console.log(soma5(3,5,7));///15
console.log(soma5());///2
console.log(soma5(3));//8 
console.log(soma5(3,0,7));//10

console.log(soma5('a', 'b', 'c'));//vai exibir o else
console.log(soma5(true, false, 'c'));//vai exibir o else
console.log(soma5(2, true, false));//vai exibir o else

///Avante!!! sigar em frente------>>>>>>>>