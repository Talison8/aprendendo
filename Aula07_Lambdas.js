let numeros = [1,2,3,4,5,6,7,8,9];
const mostrar = (frase) => {console.log(frase)};
function dobrar(v){
    return v * 2;
}

let r = numeros.map(dobrar);
mostrar(numeros);
mostrar(r);


//Funções anônimas - Lambdas (funções lambdas)

let r2 = r.map(function(valor){
    return valor * 2;
})

mostrar(r2);

mostrar(dobrar(5));

let valor = 8

mostrar(function(valor){
    return valor * 2;
})

let outra = function(valor){
    return valor * 2;
}

mostrar(outra(9));

function soma8(v1,v2){
    return v1 + v2;
}

let most = function(n1,n2,calculo = soma8){
    console.log(calculo(n1, n2));
}

most(3,4);