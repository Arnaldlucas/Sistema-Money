app.post('/cadastrar', function(req, res) {
    try{
      
        let idPedido = "1";
        let situacao = "Solicitacao Aprovada";
        let codFuncionario ="1";

        
            let sql = `UPDATE pedido SET situacao='${situacao}', codFuncionario=${codFuncionario} WHERE idPedido=${idPedido}`;
            conexao.query(sql, function(erroo, retorno){
                //caso ocorra erro
                if(erroo) throw erroo;
                console.log(retorno);
            });
        //retornar para rota principal
        res.redirect('/okCadastro');
        
    }
    catch(erro){
           res.redirect('/falhaCadastro');
    }
});