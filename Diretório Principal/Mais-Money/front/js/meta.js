// meta.js
document.getElementById('metaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const valorMeta = document.getElementById('valor_meta').value;
    const descricaoMeta = document.getElementById('descricao_meta').value;

    fetch('/cadastrarOuAtualizarMeta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            valor_meta: valorMeta,
            descricao_meta: descricaoMeta,
        }),
    })
    .then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                // Se a resposta não for OK, mostra o erro
                document.getElementById('mensagem').innerText = data.error; // Atualiza a div com a mensagem de erro
                document.getElementById('mensagem').style.color = 'red'; // Define a cor do texto como vermelho
            } else {
                // Se tudo estiver OK, mostra a mensagem de sucesso
                document.getElementById('mensagem').innerText = 'Meta cadastrada com sucesso!'; // Mensagem de sucesso
                document.getElementById('mensagem').style.color = 'green'; // Define a cor do texto como verde
            }
        });
    })
    .catch(err => {
        console.error('Erro ao enviar a requisição:', err);
        document.getElementById('mensagem').innerText = 'Erro ao enviar a requisição. Tente novamente.'; // Mensagem de erro genérica
        document.getElementById('mensagem').style.color = 'red'; // Define a cor do texto como vermelho
    });
});
