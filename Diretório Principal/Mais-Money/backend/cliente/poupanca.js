const conexao = require('../bd/conexao_mysql');
const principal = require('./principal');

function cadastrarOuAtualizarPoupanca(req, res) {
    try {
        let idMeta = req.body.meta_id;
        let valorPoupanca = parseFloat(req.body.valor_poupanca);

        if (!idMeta || isNaN(valorPoupanca)) {
            return res.redirect('./falhaPoupanca1');
        }

        let sqlVerificarPoupanca = `SELECT * FROM poupanca WHERE id_meta = ?`;

        conexao.query(sqlVerificarPoupanca, [idMeta], function (erro, retorno) {
            if (erro) {
                console.error('Erro ao executar a consulta SQL:', erro);
                return res.redirect('./falhaPoupanca2');
            }

            if (retorno.length > 0) {
                let valorExistente = parseFloat(retorno[0].valor_poupanca);
                let novoValorPoupanca = valorExistente + valorPoupanca;

                let sqlAtualizarPoupanca = `UPDATE poupanca SET valor_poupanca = ? WHERE id_meta = ?`;

                conexao.query(sqlAtualizarPoupanca, [novoValorPoupanca, idMeta], function (erro) {
                    if (erro) {
                        console.error('Erro ao atualizar a poupança:', erro);
                        return res.redirect('./falhaPoupanca3');
                    }
                    return principal(req, res);
                });
            } else {
                let sqlCadastrarPoupanca = `INSERT INTO poupanca (id_meta, valor_poupanca) VALUES (?, ?)`;

                conexao.query(sqlCadastrarPoupanca, [idMeta, valorPoupanca], function (erro) {
                    if (erro) {
                        console.error('Erro ao cadastrar a poupança:', erro);
                        return res.redirect('./falhaPoupanca4');
                    }
                    return principal(req, res);
                });
            }
        });
    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        return res.redirect('./falhaPoupanca5');
    }
}

module.exports = cadastrarOuAtualizarPoupanca;
