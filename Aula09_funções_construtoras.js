//Criando uma função construtora

function Pessoa(n,s, raca = 'humano'){
    //atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo público pode ser fora da função construtora
    this.raca = raca;

    //método privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`)};

     //Método público conseguimos acessar fora da função construtora
     this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
     }   

     this.getIdade = function(){
        return idade; }

} 

//instanciando um objeto
const valdecy = new Pessoa('Valdecy', 'Masculino');

console.log(valdecy);

console.log(valdecy.peso); //privado/undefined
console.log(valdecy.raca); //público

valdecy.fazer_aniversario();//público
valdecy.fazer_aniversario();//público//acreçenta mais um novamente

//instaciar um novo objeto
const silvanete = new Pessoa('Silvanete', 'Feminino');

silvanete.fazer_aniversario();

silvanete.fazer_aniversario();

silvanete.fazer_aniversario();

console.log(silvanete.getIdade());

console.log(typeof(Pessoa));//Function
console.log(typeof(silvanete)); //object