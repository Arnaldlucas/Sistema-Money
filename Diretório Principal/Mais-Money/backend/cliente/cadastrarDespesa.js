const conexao = require('../bd/conexao_mysql');
const principal = require('./principal');

function cadastrarDespesa(req, res) {
    try {

        let usuarioId = req.body.usuario_id;
        let tipoDespesa = req.body.tipo_despesa;
        let valorDespesa = req.body.valor_despesa;
        let dataDespesa = req.body.data_despesa;


        // Validar se todos os campos necessários foram preenchidos
        if (!usuarioId || !tipoDespesa || !valorDespesa || !dataDespesa) {
            res.redirect('./falhaCadastroDespesa1');
            return;
        }

            // Inserir o novo Despesa
            let sql = 'INSERT INTO despesa (usuario_id, tipo_despesa, valor_despesa, data_despesa) VALUES (?, ?, ?, ?)';
            conexao.query(sql, [usuarioId, tipoDespesa, valorDespesa, dataDespesa], function (erro, resultado) {
                if (erro) {
                    console.error('Erro ao executar a consulta de Despesas:', erro);
                    return res.status(500).send('Erro interno do servidor');
                }
            });
            principal(req, res);

    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        res.redirect('./falhaCadastroDespesa3');
    }
}

module.exports = cadastrarDespesa;
