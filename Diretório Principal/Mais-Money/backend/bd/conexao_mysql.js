//criar um modulo para conectar com o mysql
const mysql = require('mysql2');

//configuração do BD 
const conexao = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
  //  password:'+money2024',
    password: '',
    port:'3306',
    database:'prog_web'
})

//teste de conexão
conexao.connect(function(erroo){
if(erroo) throw erroo;
console.log('Conexão realizada com sucesso!');
})

//exportando o modulo de conexão
module.exports= conexao;
