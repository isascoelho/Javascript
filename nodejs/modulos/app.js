const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora_idade'); // Importando o módulo

const mensagem = modulo.saudacao('Isa'); // Executando a função
const idadeEm2025 = calculadora_idade.idade('Roberval', 1990);


console.log(mensagem);
console.log(idadeEm2025);