//rota de cadastrar Cliente
const conexao = require('../bd/conexao_mysql')

function fazerCadastroCliente(req,res){
    try{
        
        let nome= req.body.nome;
        let universidade = req.body.universidade;
        let curso = req.body.curso;
        let email=req.body.email;
        let senha =req.body.senha;

        //validar nome e valor do produto
        if(nome == '' ){
        res.redirect('./falhaCadastro');
        }else{
            let sql= `INSERT INTO usuario (nome_usuario, universidade_usuario, curso_usuario, email_usuario, senha_usuario) VALUES('${nome}','${universidade}','${curso}','${email}','${senha}')`;
            conexao.query(sql, function(erroo, retorno){
                //caso ocorra erro
                if(erroo) throw erroo;
                console.log(retorno);
            });
        //retornar para rota principal
        
        res.render('login');
        }
    }
    catch(erro){
           res.redirect('/falhaCadastro');
    }
}; 

module.exports = fazerCadastroCliente;