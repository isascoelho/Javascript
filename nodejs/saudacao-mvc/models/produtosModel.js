module.exports = {
    
    cadastrar: (id,  descricao, quantidade, preco) => {

     return `Olá, seu produto ${descricao}, com ID: ${id} - Quantidade ${quantidade} - valor  uniitário ${preco} foi cadastrado com sucesso!`;
    }
};