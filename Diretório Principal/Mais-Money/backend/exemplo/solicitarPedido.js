const conexao = require('../../bd/conexao_mysql')

function solicitarPedido(req,res, codCliente){
    try{
        let dataAtual = new Date(); // Obter a data atual
        let anoC = dataAtual.getFullYear(); // Obter o ano atual
        let mesC = (dataAtual.getMonth() + 1).toString().padStart(2, "0"); // Obter o mês atual
        let diaC = dataAtual.getDate().toString().padStart(2, "0");

        let dataContratacao = `${anoC}-${mesC}-${diaC}`;
        let valor = req.body.valor;
        let idServico = req.body.idServico;
        let situacao= "Aguardando Aprovação";
        let formaPagamento= req.body.pagamento;
        let mes = req.body.mes;
        let dia = req.body.dia;
        let hora = req.body.horario;
        let endereco= req.body.endereco;

        if(formaPagamento == '' || endereco ==''){
            res.redirect('./falhaCadastro');
            }else{   
            let sql= `INSERT INTO pedido (codCliente, dataContratacao, valor, situacao, formaPagamento, mes, dia, hora, endereco, idServico) VALUES(${codCliente},'${dataContratacao}',${valor},'${situacao}','${formaPagamento}', ${mes},${dia},${hora},'${endereco}',${idServico})`;
            conexao.query(sql, function(erroo, retorno){
                //caso ocorra erro
                if(erroo) throw erroo;
                console.log(retorno);
            });
        //retornar para rota principal
        res.redirect('/okCadastro');
        }
    }
    catch(erro){
           res.redirect('/falhaCadastr');
           if(erro) throw erro;
    }
};


module.exports = solicitarPedido;