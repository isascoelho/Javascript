module.exports = {
    
    gerarMensagemLogin: (login, senha) => {
    let acesso;

    if (login === "isabella" && senha === "230508Isa%") {
     acesso = "Liberado";
    }
    else { 
        acesso = "negado";

    }
     return `Olá, ${login}! Seu acesso foi ${acesso}.`;
    }
};