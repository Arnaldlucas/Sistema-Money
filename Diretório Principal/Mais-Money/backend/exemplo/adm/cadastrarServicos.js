//rota de cadastrar serviços
app.post('/cadastrar', function(req,res){
    try{
        
        let idTipo= 1;
        let nome= "manutenção";
        let imagem= req.files.imagem.name;
        let descricao= "manutenção de pcs e ets";
        let valor = 300;

        //validar nome e valor do produto
        if(nome == '' || valor == '' || isNaN(valor) || descricao ==''){
        res.redirect('./falhaCadastro');
        }else{
            let sql= `INSERT INTO servicos (nome, idTipo, valor, imagem, descricao) VALUES('${nome}',${idTipo}, ${valor},'${imagem}','${descricao}')`;
            conexao.query(sql, function(erroo, retorno){
                //caso ocorra erro
                if(erroo) throw erroo;
               
                //caso ocorra com sucesso
                req.files.imagem.mv(__dirname+'/imagens/'+req.files.imagem.name);
                console.log(retorno);
            });
        //retornar para rota principal
        res.redirect('/okCadastro');
        }
    }
    catch(erro){
           res.redirect('/falhaCadastro');
    }
});