const conexao = require('../bd/conexao_mysql');
const principal = require('./principal');

function cadastrarOuAtualizarMeta(req, res) {
    try {
        let idUsuario = req.session.userId;

        if (!idUsuario) {
            res.redirect('./login'); // Verifica se o usuário está autenticado
            return;
        }

        let meta = parseFloat(req.body.valor_meta); // Converte para número
        let descricaoMeta = req.body.descricao_meta;

        // Validar se a meta e a descrição não estão vazias e se a meta não é negativa
        if (!meta || !descricaoMeta || descricaoMeta.trim() === '') {
            return res.status(400).json({ error: 'Meta e descrição não podem estar vazias.' });
        }

        if (meta < 0) {
            // Retorna uma mensagem de erro para o cliente
            return res.status(400).json({ error: 'Não é possível definir metas negativas. Insira outra meta financeira.' });
        }

        let sqlVerificarMeta = `SELECT * FROM meta WHERE usuario_id = ? AND descricao_meta = ?`;

        conexao.query(sqlVerificarMeta, [idUsuario, descricaoMeta], function (erro, retorno) {
            if (erro) {
                console.error('Erro ao executar a consulta SQL:', erro);
                return res.status(500).json({ error: 'Erro interno do servidor.' });
            }

            if (retorno.length > 0) {
                // Se a meta já existir, atualizar
                let sqlAtualizarMeta = `UPDATE meta SET valor_meta = ? WHERE usuario_id = ? AND descricao_meta = ?`;

                conexao.query(sqlAtualizarMeta, [meta, idUsuario, descricaoMeta], function (erro) {
                    if (erro) {
                        console.error('Erro ao atualizar a meta:', erro);
                        return res.status(500).json({ error: 'Erro ao atualizar a meta.' });
                    }
                    principal(req, res);
                });
            } else {
                // Cadastrar nova meta
                let sqlCadastrarMeta = `INSERT INTO meta (usuario_id, valor_meta, descricao_meta) VALUES (?, ?, ?)`;

                conexao.query(sqlCadastrarMeta, [idUsuario, meta, descricaoMeta], function (erro) {
                    if (erro) {
                        console.error('Erro ao cadastrar a meta:', erro);
                        return res.status(500).json({ error: 'Erro ao cadastrar a meta.' });
                    }
                    principal(req, res);
                });
            }
        });

    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

module.exports = cadastrarOuAtualizarMeta;
