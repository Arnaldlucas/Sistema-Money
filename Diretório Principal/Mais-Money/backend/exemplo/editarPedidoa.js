const conexao = require('../../bd/conexao_mysql')

function solicitarPedido(req,res){
    try{
        
        let idPedido = req.body.idPedido;
        let formaPagamento= req.body.pagamento;
        let mes = req.body.mes;
        let dia = req.body.dia;
        let hora = req.body.horario;
        let endereco= req.body.endereco;

        if(formaPagamento == '' || endereco ==''){
            res.redirect('./falhaCadastro');
            }else{   
                let sql = `UPDATE pedido SET formaPagamento='${formaPagamento}', mes=${mes},dia=${dia},hora=${hora}, endereco='${endereco}' WHERE idPedido=${idPedido}`;
            conexao.query(sql, function(erroo, retorno){
                //caso ocorra erro
                if(erroo) throw erroo;
                console.log(retorno);
                
            });
        //retornar para rota principal
          res.redirect('./okCadastro')
        }
    }
    catch(erro){
           res.redirect('/falhaCadastr');
           if(erro) throw erro;
    }
};


module.exports = solicitarPedido;

