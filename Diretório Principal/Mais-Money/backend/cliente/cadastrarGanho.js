const conexao = require('../bd/conexao_mysql');
const principal = require('./principal');

function cadastrarGanho(req, res) {
    try {
        let usuarioId = req.body.usuario_id;
        let tipoGanho = req.body.tipo_ganho;
        let valorGanho = parseFloat(req.body.valor_ganho); // Garantir que o valor seja numérico
        let dataGanho = req.body.data_ganho;

        // Validar se todos os campos necessários foram preenchidos
        if (!usuarioId || !tipoGanho || isNaN(valorGanho) || !dataGanho) {
            res.redirect('./falhaCadastroGanho1');
            return;
        }

        // Selecionar o balanço atual do usuário
        let selectBalancoSql = 'SELECT balanco_total FROM usuario WHERE usuario_id = ?';
        conexao.query(selectBalancoSql, [usuarioId], function (erro, resultado) {
            if (erro) {
                console.error('Erro ao buscar o balanço:', erro);
                return res.status(500).send('Erro interno do servidor');
            }

            let balancoAtual = resultado[0].balanco_total;
            let novoBalanco = balancoAtual + valorGanho; // Adiciona o valor ganho

            // Atualizar o balanço total do usuário
            let updateBalancoSql = 'UPDATE usuario SET balanco_total = ? WHERE usuario_id = ?';
            conexao.query(updateBalancoSql, [novoBalanco, usuarioId], function (erro) {
                if (erro) {
                    console.error('Erro ao atualizar o balanço:', erro);
                    return res.status(500).send('Erro interno do servidor');
                }

                // Inserir o novo ganho
                let insertGanhoSql = 'INSERT INTO ganho (usuario_id, tipo_ganho, valor_ganho, data_ganho) VALUES (?, ?, ?, ?)';
                conexao.query(insertGanhoSql, [usuarioId, tipoGanho, valorGanho, dataGanho], function (erro) {
                    if (erro) {
                        console.error('Erro ao executar a consulta de ganhos:', erro);
                        return res.status(500).send('Erro interno do servidor');
                    }

                    // Redirecionar para a página principal ou qualquer outro fluxo
                    principal(req, res);
                });
            });
        });
    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        res.redirect('./falhaCadastroGanho3');
    }
}

module.exports = cadastrarGanho;
