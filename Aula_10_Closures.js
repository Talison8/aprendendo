// let papa = 'global'; ///pode ser acessada globalmente no nosso projeto

// function imprimir (){
//     console.log(papa);
// }

// function outra (){
//     let papa ='local';//pode ser acessada localmente no bloco/contexto
//     imprimir() //global
//     console.log(papa);//local
// }

// outra();

//novo exemplo
let va = 'global'

function externa(){
    let va = 'local';

    function interna(){
        return va;//local
    }

    return interna;
}

let executa = externa();

console.log(executa());//local
console.log(executa);

/*Estamos estudando closures (contexto léxico de uma função)

e existe uma Linguagem de programação chamada clojure
*/