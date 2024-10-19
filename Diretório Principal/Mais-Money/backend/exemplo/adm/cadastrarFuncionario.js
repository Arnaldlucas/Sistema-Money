//rota de cadastrar funcionario
app.post('/cadastrarFuncionario', function(req,res){
    try{
        
        let nome= "Lucas";
        let cpf = '04608644278';
        let email="lucas@gmail.com";
        let senha ="123456";
        let dataNasc = "2001-03-19";
        let celular = '92991171482';
        let endereco= "Rua tall";
        let CTPS = 94758620495;

        //validar nome e valor do produto
        if(nome == '' || senha == '' || endereco ==''){
        res.redirect('./falhaCadastro');
        }else{
            let sql= `INSERT INTO funcionario (nome, cpf, email, senha, dataNasc, celular, endereco, CTPS) VALUES('${nome}','${cpf}','${email}','${senha}','${dataNasc}', ${celular},'${endereco}',${CTPS})`;
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
           res.redirect('/falhaCadastro');
    }
});
