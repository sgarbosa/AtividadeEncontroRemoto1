//criar um software para cadastro de peças
//se peça possuir um peso maior que 100gr, pode cadastrar - check
//caso a lista de peça >10 , informar nao ter capacidade suficiente - check
//caso peça tenha um nome < 3 caracteres, falar que deu erro. - check
//-------------------------------------------------------------------------

// Início do Código
var listaDePecas = ["Volante", "Banco da Frente", "Filtro de Óleo"]; //Criação da Variável Lista de Peças utilizando o código VAR.
if (listaDePecas.length < 10) {                                    //Criação de condicional usando IF para checar se a variavel listaDePecas possui menos que 10 elementos.
    console.log("É possível cadastrar mais peças.");                //Se ele possuir menos, mostrar um texto falando que é possível cadastrar mais peças.
} else {
    console.log("Essa lista está cheia. Não é possível mais cadastrar algum item."); //Se ele possuir mais, mostrar texto falando que não é possivel cadastrar mais peças.
}
let peso = 150;                                                       // Criação de outra variável de peso das peças, utilizando o código LET.
if (peso < 100) {                                                  //Criação de condicional usando IF para checar se a peça possui peso adequado para cadastro, que seria 100 gramas.
    console.log("A peça não possui peso adequado para cadastro.");  //Se ele possuir menos de 100gr, ele não será adequado para cadastro.
} else {
    console.log("A pesa possui peso adequado para cadastro.");      //Se ele possuir mais de 100gr, ele será adequado para cadastro. 
}
let nomeDaPeca = ["Volante"];                                        //Criação da variável nome da peça utilizando LET.
if (nomeDaPeca.length > 3) {                                         //Condicional para verificar se o nome da peça possui mais de 3 caracteres.
    console.log("O nome da peça está adequado para o cadastro!")     //Se tem mais de 3 caracteres, falar que o nome dessa peça está ok.
} else if (nomeDaPeca.length ==0) {                                 
    console.log("A peça precisa ter um nome para ser cadastrada.")   //Se a peça nao tiver nome, falar que 
} else {
    console.log("O nome da peça deve ter mais de 3 caracteres para o cadsatro."); //Se tem nomes de 3 caracteres, falar que o nome da peca precisa ter mais de 3 caracteres;
} 
switch (nomeDaPeca.length) {                                         //Utilizando o condicional pelo codigo switchcase, caso por caso.
    case 0:
        console.log("A peça precisa ter um nome para ser cadastrada.");
        break;

        case 1:
        case 2:
        case 3:
            console.log("O nome da peça deve ter mais de 3 caracteres para o cadsatro.");
            break;

        default:
            console.log("O nome da peça está adequado para o cadastro!");
            break;
}