function extrairDia(data) {
    // Cria um objeto Date a partir da string no formato YYYY-MM-DD
    const dataObj = new Date(data);
  
    // Extrai o dia do objeto Date
    const dia = dataObj.getDate();
  
    // Retorna o dia
    return dia;
  }

// Importando o módulo do express
const express = require('express');

// Módulo da conexão
const conexao = require('./backend/bd/conexao_mysql');

// Filesystem
const fs = require('fs');

// Session
const session = require('express-session');

// Importando o express-handlebars
const { engine } = require('express-handlebars');

// Importando fileupload
const fileupload = require('express-fileupload');

// Importando o módulo principal
const principal = require('./backend/cliente/principal');

//-----------------------------------------------------------------------------------------------------------
const app = express();

// Configuração do session
app.use(session({
    secret: 'sua_chave_secreta_aqui',
    resave: false,
    saveUninitialized: false
}));

// Middleware para arquivos estáticos
app.use(express.static('front'));
app.use('/css', express.static('./css'));
app.use(fileupload());
app.use('/imagens', express.static('./imagens'));

// Configuração do express-handlebars
app.engine('handlebars', engine({
    helpers: {
        // Função auxiliar para extrair o dia da data
        extrairDia: function(data) {
            const dataObj = new Date(data);
            return dataObj.getDate();
        },
        extrairMes: function(data) {
            const dataObj = new Date(data);
            const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return meses[dataObj.getMonth()];
        },
        primeiraLetra: function(str) {
            return str && str.length > 0 ? str.charAt(0) : '';
        },
        json: function(context) {
            return JSON.stringify(context);
        }
    }
}));

app.set('view engine', 'handlebars');
app.set('views', './views');

//Manipulação de conexão de dados via rotas
app.use(express.json());
app.use(express.urlencoded({ extende: false }));

//rotas para nosso projeto
function isAuthenticated(req, res, next) {
    if (req.session.userOn) {
        return next();
    } 
    else {
           
        res.redirect('/login');

    }
}
app.get('/', isAuthenticated, (req, res) => {
    //sql
    let sql = `SELECT * FROM servicos`;
    
    
    //executando o SQL
    conexao.query(sql, function (erro, retorno) {
     //   let servicosFiltrados1 = retorno.filter(servicos => servicos.idTipo === 1); // Filtrar apenas os serviços com idTipo igual a 1
  //  let servicosFiltrados2 = retorno.filter(servicos => servicos.idTipo === 2); // Filtrar apenas os serviços com idTipo igual a 2
    
       res.render('login');
    });
  
});


//-------------------------------------------------------------------------------------------------------------------------------


const fazerLogin = require('./backend/cliente/login'); // Importar a função de login
app.post('/login', fazerLogin); 

app.get('/login', (req, res) => {
    res.render('login');
});

/*
app.post('/voltaInicio', function(req, res) {
    let sql2 = `SELECT * FROM servicos`;


    conexao.query(sql2, function (erro, retorno) {
        if (erro) {
            // Lidar com o erro
            console.error(erro);
            return res.status(500).send("Erro interno do servidor");
        }
    
        // Filtrar apenas os serviços com idTipo igual a 1
      //  let servicosFiltrados1 = retorno.filter(servicos => servicos.idTipo === 1);
    
        // Filtrar apenas os serviços com idTipo igual a 2
    //    let servicosFiltrados2 = retorno.filter(servicos => servicos.idTipo === 2);
    
        // Obter o nome do usuário da sessão
       // let nomeUsuario = req.session.userName;
    
        // Renderizar o modelo Handlebars 'inicio' e passar os dados para o modelo
      //  res.render('inicio', { servicos1: servicosFiltrados1, servicos2: servicosFiltrados2, nomeUsuario: nomeUsuario });
    });
});*/


app.post('/registro', function(req, res) {
    res.render('registro');
});


const cadastroCliente = require('./backend/cliente/cadastroCliente');
app.post('/cadastroCliente', cadastroCliente); 

const atualizarReceita= require('./backend/cliente/cadastrarGanho');
app.post('/atualizarReceita', async function(req, res) {
    try {
        await atualizarReceita(req, res);
        res.redirect('/principal'); // Certifique-se de que a rota tem um '/' antes de 'principal'
    } catch (err) {
        console.error('Erro ao atualizar receita:', err);
        res.status(500).send('Erro ao atualizar receita');
    }
});

const atualizarDespesa= require('./backend/cliente/cadastrarDespesa');
app.post('/atualizarDespesa', async function(req, res) {
    try {
        await atualizarDespesa(req, res);
        res.redirect('/principal'); // Certifique-se de que a rota tem um '/' antes de 'principal'
    } catch (err) {
        console.error('Erro ao atualizar Despesa:', err);
        res.status(500).send('Erro ao atualizar Despesa');
    }
});


app.use('/principal',isAuthenticated ,principal);
// Rota para excluir uma despesa
app.delete('/despesas/:id', (req, res) => {
    const idDespesa = req.params.id;
    const sql = `DELETE FROM despesa WHERE id_despesa = ?`;

    conexao.query(sql, [idDespesa], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).send('Erro ao remover despesa');
        }
        res.status(200).send('Despesa removida');
    });
});

// Rota para excluir uma despesa
app.delete('/ganhos/:id', (req, res) => {
    const idGanho = req.params.id;
    const sql = `DELETE FROM ganho WHERE id_ganho = ?`;

    conexao.query(sql, [idGanho], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).send('Erro ao remover ganho');
        }
        res.status(200).send('Ganho removido');
    });
});



app.put('/update-despesa', (req, res) => {
    const { id, tipo, valor } = req.body;

    // Validação dos dados recebidos
    if (!id || !tipo || !valor) {
        return res.status(400).send('Dados incompletos.');
    }

    const query = 'UPDATE despesa SET tipo_despesa = ?, valor_despesa = ? WHERE id_despesa = ?';
    conexao.query(query, [tipo, valor, id], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar despesa:', err);
            return res.status(500).send('Erro ao atualizar despesa.');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Despesa não encontrada.');
        }
        res.send('Despesa atualizada com sucesso!');
    });
});


app.put('/update-ganho', (req, res) => {
    const { id, tipo, valor } = req.body;

    // Validação dos dados recebidos
    if (!id || !tipo || !valor) {
        return res.status(400).send('Dados incompletos.');
    }

    const query = 'UPDATE ganho SET tipo_ganho = ?, valor_ganho = ? WHERE id_ganho = ?';
    conexao.query(query, [tipo, valor, id], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar ganho:', err);
            return res.status(500).send('Erro ao atualizar ganho.');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Ganho não encontrado.');
        }
        res.send('Ganho atualizado com sucesso!');
    });
});
;

const cadastrarOuAtualizarPoupanca = require('./backend/cliente/poupanca');

app.post('/cadastrarOuAtualizarPoupanca', cadastrarOuAtualizarPoupanca);

const cadastrarOuAtualizarMeta = require('./backend/cliente/meta');

app.post('/cadastrarOuAtualizarMeta', cadastrarOuAtualizarMeta);



app.get('/logout', (req, res) => {
    // Destroi a sessão do usuário
    req.session.destroy(err => {
        if (err) {
            console.error('Erro ao destruir sessão:', err);
            return res.status(500).send('Erro ao sair.');
        }
        // Redireciona para a página de login após logout
        res.redirect('/login');
    });
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
  
