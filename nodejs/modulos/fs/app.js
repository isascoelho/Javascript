// Load the filesystem module
//const fs = require('fs');
import fs from 'fs';

// Lendo um arquivo de forma assincrona
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  //tratando erro
  if (err) {
    //adicionando erro no console
    console.error('Error reading file: ' + err);
    //retornando para nao executar o console.log abaixo
    return;
  }
  //se nao houver erro, exibindo o conteudo do arquivo
  console.log('File content: ' + data);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Reading file... (this runs first!)');