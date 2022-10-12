//Forma 1
function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(3,5));

//Forma 2
let somar2 = function(num1,num2){
    return num1 + num2;
}

console.log(somar2(3,5));

//Forma 3
const somar3 = soma;

console.log(somar3(3,5));

////Arrow function    //arrow
let somar4 = (num1,num2) => {
    return num1 + num2;
}

console.log(somar4(3,5));

/*Atenção::

Caso a sua função tenha apenas 1 parâmetro de entrada e executa apenas uma linha.
vacé pode simplificar ainda mais usando Arrow function
*/

let dobrar = valor => valor * 2;

console.log(dobrar(6));

function mens1(){
    console.log('evolua seu lado geek!');
}

mens1()

const msg2 = () => console.log('evolua seu lado geek!');

msg2();