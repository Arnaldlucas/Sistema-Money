const conexao = require('../bd/conexao_mysql');

function fazerLoginADM(req, res) {
    try {
        let email = req.body.email; // Supondo que o email seja enviado através do corpo da requisição
        let senha = req.body.senha; // Supondo que a senha seja enviada através do corpo da requisição

        // Validar se o email e a senha não estão vazios
        if (email == '' || senha == '') {
            res.redirect('./falhaLogin');
            return;
        }

        // Criar a query SQL para buscar o usuário
        let sql = `SELECT * FROM funcionario WHERE email = '${email}' AND senha = '${senha}'`;

        // Conectar ao banco de dados e executar a query
        conexao.query(sql, [email, senha], function (erro, retorno) {
            // Se ocorrer um erro, redirecionar para a página de falha
            if (erro) {
                console.error('Erro ao executar a consulta SQL:', erro);
                res.redirect('./falhaLogin');
                return;
            }

            // Se o retorno da query for vazio, o usuário não foi encontrado
            if (retorno.length == 0) {
                res.redirect('./falhaLogin');
                return;
            }

            // Se o usuário for encontrado, iniciar a sessão e redirecionar para a página principal
            let idCliente = retorno[0].codCliente;
            let nomeUsuario = retorno[0].nome;
            //req.session.idCliente = idCliente; // Armazenar o ID do cliente na sessão
            req.session.userId = idCliente;
            req.session.userName = nomeUsuario;
            

        });
        let sql2 = `SELECT * FROM pedido JOIN servicos`;


        conexao.query(sql2, function (erro, retorno) {
            if (erro) {
                // Lidar com o erro
                console.error(erro);
                return res.status(500).send("Erro interno do servidor");
            }
        
            // Filtrar apenas os serviços com idTipo igual a 1
            let servicosFiltrados1 = retorno.filter(servicos => servicos.situacao === "Aguardando Aprovação");
        
            // Filtrar apenas os serviços com idTipo igual a 2
            let servicosFiltrados2 = retorno.filter(servicos => servicos.situacao !== "Aguardando Aprovação");
        
            // Obter o nome do usuário da sessão
            let nomeUsuario = req.session.userName;
        
            // Renderizar o modelo Handlebars 'inicio' e passar os dados para o modelo
            res.render('CentralADM', { servicos1: servicosFiltrados1, servicos2: servicosFiltrados2, nomeUsuario: nomeUsuario });
        });
    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        res.redirect('./falhaLogin');
    }
};
module.exports = fazerLoginADM;

