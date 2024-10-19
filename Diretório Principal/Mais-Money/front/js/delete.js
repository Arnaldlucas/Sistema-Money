document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-excluir').forEach(button => {
        button.addEventListener('click', () => {
            const despesaId = button.getAttribute('data-id');
            fetch(`/despesas/${despesaId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    location.reload();
                } else {
                    console.error('Erro ao remover despesa.');
                }
            })
            .catch(error => {
                console.error('Erro na solicitação:', error);
            });
        });
    });

    document.querySelectorAll('.btn-excluir-ganho').forEach(button => {
        button.addEventListener('click', () => {
            const ganhoId = button.getAttribute('data-id');
            fetch(`/ganhos/${ganhoId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    const itemDiv = button.closest('.data');
                    itemDiv.remove();
                    console.log('Ganho removido com sucesso.');
                } else {
                    console.error('Erro ao remover Ganho.');
                }
            })
            .catch(error => {
                console.error('Erro na solicitação:', error);
            });
        });
    });
});
