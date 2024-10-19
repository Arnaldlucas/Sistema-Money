const conexao = require('../bd/conexao_mysql');



function principal(req, res) {
    try {
        let valorPoupanca =0;
        let sqlMeta = 'SELECT * FROM meta WHERE usuario_id = ?';
        conexao.query(sqlMeta, [req.session.userId], function (erroMeta, resultadoMeta) {
            if (erroMeta) {
                console.error('Erro ao obter a meta:', erroMeta);
                return;
            }
            
            if (resultadoMeta.length > 0) {
                let metaId = resultadoMeta[0].id_meta;
                req.session.id_meta = metaId;
                let valorMeta = resultadoMeta[0].valor_meta;
                req.session.valor_meta =valorMeta;
                req.session.nome_meta = resultadoMeta[0].descricao_meta;
                
                let sqlPoupanca = 'SELECT * FROM poupanca WHERE id_meta = ?';
                conexao.query(sqlPoupanca, [metaId], function (erroPoupanca, resultadoPoupanca) {
                    if (erroPoupanca) {
                        console.error('Erro ao obter a poupança:', erroPoupanca);
                        return;
                    }
                    if (resultadoPoupanca.length > 0) {
                    let valorPoupanca = resultadoPoupanca[0].valor_poupanca;
                    req.session.userPoupanca = valorPoupanca;
                 
                    // Calcular a porcentagem de progresso
                    let progresso = (valorPoupanca * 100)/valorMeta;
                    req.session.progressoMeta = progresso;
                    }
                });
            } else {
                console.log('Nenhuma meta encontrada para este usuário.');
            }
        });
        
        

        let sql1 = 'SELECT *, usuario_id FROM despesa WHERE usuario_id = ? order by data_despesa desc';
        let sql2 = 'SELECT *, usuario_id FROM ganho WHERE usuario_id = ? ORDER BY data_ganho DESC';

        conexao.query(sql1, [req.session.userId], function (erro, retornoDespesa) {
            if (erro) {
                console.error('Erro ao executar a consulta de despesas:', erro);
                return res.status(500).send('Erro interno do servidor');
            }
            let somaDespesas = 0;
            if (!Array.isArray(retornoDespesa)) {
                console.error('Formato inesperado dos dados retornados (despesas):', retornoDespesa);
                return res.status(500).send('Erro interno do servidor');
            }

            

            somaDespesas = retornoDespesa.reduce((total, despesa) => {
                let valor = parseFloat(despesa.valor_despesa);
                if (!isNaN(valor)) {
                    return total + valor;
                } else {
                    console.warn('Valor de despesa inválido:', despesa.valor_despesa);
                    return total;
                }
            }, 0);

            let somaDespesasFormatada = somaDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            conexao.query(sql2, [req.session.userId], function (erro, retornoGanho) {
                if (erro) {
                    console.error('Erro ao executar a consulta de ganhos:', erro);
                    return res.status(500).send('Erro interno do servidor');
                }

                if (!Array.isArray(retornoGanho)) {
                    console.error('Formato inesperado dos dados retornados (ganhos):', retornoGanho);
                    return res.status(500).send('Erro interno do servidor');
                }

             

                let somaGanhos = retornoGanho.reduce((total, ganho) => {
                    let valor = parseFloat(ganho.valor_ganho);
                    if (!isNaN(valor)) {
                        return total + valor;
                    } else {
                        console.warn('Valor de ganho inválido:', ganho.valor_ganho);
                        return total;
                    }
                }, 0);

                let somaGanhosFormatada = somaGanhos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                let nomeUsuario = req.session.userName || 'Usuário';
                const sqlTotal = 'SELECT SUM(valor_despesa) as total FROM despesa';
                conexao.query(sqlTotal, (err, totalResult) => {
                    if (err) {
                        throw err;
                    }
                    const totalDespesas = totalResult[0].total;

                    const sql3 = `
                        SELECT tipo_despesa, SUM(valor_despesa) as total
                        FROM despesa
                        GROUP BY tipo_despesa
                    `;
                    conexao.query(sql3, (err, results) => {
                        if (err) {
                            throw err;
                        }
                        // Calcular porcentagens
                        const despesas = results.map(despesa => ({
                            tipo_despesa: despesa.tipo_despesa,
                            total: ((despesa.total / totalDespesas) * 100).toFixed(2) // Porcentagem com 2 casas decimais
                        }));

                        // Rótulos predefinidos
                        const predefinedLabels = ['Transporte', 'Alimentação', 'Moradia', 'Saúde', 'Educação', 'Lazer','Outros'];

                        // Ordenar as despesas de acordo com os rótulos predefinidos
                        const sortedDespesas = predefinedLabels.map(label => {
                            const despesa = despesas.find(d => d.tipo_despesa === label);
                            return despesa ? despesa.total : 0; // Retornar 0 se não houver despesa para o rótulo
                        });

                        // Renderizar a página Handlebars com os dados calculados
                        res.render('principal', { 
                            sortedDespesas, predefinedLabels,
                            despesa: retornoDespesa, 
                            ganho: retornoGanho, 
                            nomeUsuario: nomeUsuario,
                            somaDespesas: somaDespesasFormatada,
                            somaGanhos: somaGanhosFormatada,
                            usuarioId: req.session.userId,
                            valor_poupanca: req.session.userPoupanca,
                            nome_meta: req.session.nome_meta,
                            progresso_meta: req.session.progressoMeta,
                            valorMeta: req.session.valor_meta,
                            balanco: (somaGanhos - somaDespesas).toFixed(2).replace('.', ','),
                            id_meta: req.session.id_meta

                        });
                    });
                });
            });
        });
    } catch (erro) {
        console.error('Erro durante o processamento da requisição:', erro);
        res.status(500).send('Erro interno do servidor');
    }
}

module.exports = principal;

