const conexao = require('../bd/conexao_mysql');
const principal = require('./principal');

function fazerLogin(req, res) {
    try {
      
        let email = req.body.email; //Supondo que o email seja enviado através do corpo da requisição
        let senha = req.body.senha; //Supondo que a senha seja enviada através do corpo da requisição

        //Validar se o email e a senha não estão vazios
        if (email == '' || senha == '') {
            res.redirect('./falhaLogin');
            return;
        }

        //Criar a query SQL para buscar o usuário
        let sql = `SELECT * FROM usuario WHERE email_usuario = '${email}' AND senha_usuario = '${senha}'`;

        //Conectar ao banco de dados e executar a query
        conexao.query(sql, [email, senha], function (erro, retorno) {
            //Se ocorrer um erro, redirecionar para a página de falha
            if (erro) {
                console.error('Erro ao executar a consulta SQL:', erro);
                res.redirect('./falhaLogin');
                return;
            }

            //Se o retorno da query for vazio, o usuário não foi encontrado
            if (retorno.length == 0) {
                res.redirect('./falhaLogin');
                return;
            }

            //Se o usuário for encontrado, iniciar a sessão e redirecionar para a página principal
            let idUsuario = retorno[0].usuario_id;
            let nomeUsuario = retorno[0].nome_usuario;
        
            //req.session.idCliente = idCliente; //Armazenar o ID do cliente na sessão
            req.session.userId = idUsuario;
            req.session.userName = nomeUsuario;
            req.session.userOn = true;
            
              
            principal(req, res);
        
        });
       
                             

    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        res.redirect('./falhaLogin');
    }
};
module.exports = fazerLogin;

