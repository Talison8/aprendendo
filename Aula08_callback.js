const familia = [ 
    'Silvanete',
    'Valdecy',
    'Tatiane',
    'Tiago',
    'Thaynara',
    'Talison'
]

// function apresentar (familia, indice){
//     console.log(`${indice + 1} - ${familia}`);//aqui o numero um siguinificar de onde o numeros vai começa a conta
// }

// familia.forEach(apresentar); ///Aqui está ocorrendo o callback

//usando lambda
// familia.forEach(function(membros, indice){
//     console.log(`${indice + 1 } - ${membros}`);
// });

//usando arrow
// familia.forEach((membros, indice) => console.log(`${indice +1} - ${membros}`));

const precos = [23,65,34,86,08,112,533,676,23];

let menores = []

// for (let p in precos){
//     if(precos[p] < 30){
//         menores.push(precos[p]);
//     }
// }

// console.log(menores);

//Forma 1
// maiores = precos.filter(function(preco){
//     return preco > 30;
// })

// console.log(maiores);

///Forma 2 

maiores = precos.filter(preco => preco > 20);

console.log(maiores);
