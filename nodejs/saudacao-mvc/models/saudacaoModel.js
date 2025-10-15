module.exports = {
  gerarMensagemPersonalizada: (nome, idade, genero) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

   let msgGenero;
    if (genero === "feminino") {
      msgGenero = "uma mulher";
    } else {
      msgGenero = "um homem";
    }

    return `Olá, ${nome}! Você é ${faixaEtaria} e ${msgGenero}.`;
  }
};
