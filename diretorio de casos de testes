# Plano de Testes de Software - Sistema +Money

## Caso de Teste 1: Registro de Usuário
**Caracterização**: Validar o fluxo de registro de um novo usuário.  
**Entradas**: Nome, e-mail, senha válidos.  
**Resultados Esperados**: Usuário registrado com sucesso e redirecionado à página inicial.  
**Recursos**: Ambiente de teste Cypress configurado, banco de dados em modo de teste.  
**Restrições de Uso**: E-mail não deve já estar registrado.  
**Dependências**: Nenhuma.  

---

## Caso de Teste 2: Login de Usuário
**Caracterização**: Validar login com credenciais corretas.  
**Entradas**: E-mail e senha válidos.  
**Resultados Esperados**: Redirecionamento para dashboard com informações financeiras.  
**Recursos**: Usuário já registrado.  
**Restrições de Uso**: Senha deve ser associada ao e-mail informado.  
**Dependências**: Caso de Teste 1.  

---

## Caso de Teste 3: Registro de Nova Transação
**Caracterização**: Testar o registro de uma nova transação.  
**Entradas**: Categoria, valor e data.  
**Resultados Esperados**: Transação registrada e exibida na lista de transações.  
**Recursos**: Conta de usuário autenticada.  
**Restrições de Uso**: Valor deve ser numérico positivo.  
**Dependências**: Caso de Teste 2.  

---

## Caso de Teste 4: Edição de Transação
**Caracterização**: Validar a edição de uma transação existente.  
**Entradas**: Novo valor e categoria.  
**Resultados Esperados**: Atualização da transação exibida corretamente.  
**Recursos**: Transação previamente registrada.  
**Restrições de Uso**: Não é permitido valores negativos.  
**Dependências**: Caso de Teste 3.  

---

## Caso de Teste 5: Exclusão de Transação
**Caracterização**: Validar a exclusão de uma transação existente.  
**Entradas**: ID da transação a ser excluída.  
**Resultados Esperados**: Transação removida com sucesso.  
**Recursos**: Transação registrada no sistema.  
**Restrições de Uso**: Apenas usuários autenticados podem excluir.  
**Dependências**: Caso de Teste 3.  

---

## Caso de Teste 6: Controle de Acesso à Área Restrita
**Caracterização**: Garantir que usuários não autenticados não acessem áreas restritas.  
**Entradas**: Tentativa de acessar a URL de dashboard sem autenticação.  
**Resultados Esperados**: Redirecionamento para a página de login.  
**Recursos**: Navegador sem sessão ativa.  
**Restrições de Uso**: Sessão de usuário inexistente ou expirada.  
**Dependências**: Nenhuma.  

---

## Caso de Teste 7: Geração de Gráfico de Despesas
**Caracterização**: Validar a geração correta de gráficos com base em transações.  
**Entradas**: Dados financeiros do usuário.  
**Resultados Esperados**: Gráfico categorizado exibindo valores corretos.  
**Recursos**: Transações previamente registradas.  
**Restrições de Uso**: Banco de dados populado com dados válidos.  
**Dependências**: Caso de Teste 3.  

---

## Caso de Teste 8: Recuperação de Senha
**Caracterização**: Validar o envio de e-mail de recuperação de senha.  
**Entradas**: E-mail registrado.  
**Resultados Esperados**: Link de recuperação enviado ao e-mail informado.  
**Recursos**: SMTP configurado no ambiente de teste.  
**Restrições de Uso**: E-mail deve estar previamente registrado.  
**Dependências**: Caso de Teste 1.  

---

## Caso de Teste 9: Criação de Meta Financeira
**Caracterização**: Validar a criação de uma nova meta financeira.  
**Entradas**: Nome da meta e valor.  
**Resultados Esperados**: Meta registrada e exibida corretamente.  
**Recursos**: Conta de usuário autenticada.  
**Restrições de Uso**: Valor da meta deve ser positivo.  
**Dependências**: Caso de Teste 2.  

---

## Caso de Teste 10: Edição de Perfil do Usuário
**Caracterização**: Validar a edição de informações do perfil do usuário.  
**Entradas**: Novo nome e e-mail.  
**Resultados Esperados**: Dados atualizados com sucesso.  
**Recursos**: Conta de usuário autenticada.  
**Restrições de Uso**: O e-mail não deve já existir no sistema.  
**Dependências**: Caso de Teste 1.  
