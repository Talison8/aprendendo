/*Função fábrica - Function Factory */

function fabricar_curso(n,p){
    const desconto = 0.90;
    return {
        nome: n,
        preco:(p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso('JavaScript', 50.00));
console.log(fabricar_curso('APIs', 100.00));

cursos = []

for(let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`Curso ${i + 1}`, `${20.00 + i * 3}`));

}

console.log(cursos);