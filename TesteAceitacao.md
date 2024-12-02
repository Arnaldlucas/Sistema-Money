# Teste de Aceitação - +Money

## Sobre a Aplicação

**+Money** é uma aplicação web projetada para ser um assistente financeiro pessoal. Com foco no gerenciamento de gastos e na definição de metas, o +Money ajuda os usuários a controlar suas finanças de forma eficiente.

## Objetivo dos Testes de Aceitação

Garantir que todas as funcionalidades da aplicação estejam funcionando conforme o esperado, proporcionando uma experiência positiva ao usuário.

---

## Passos para Realizar o Teste de Aceitação

### 1. **Preparação do Ambiente**
   - Certifique-se de que o ambiente de desenvolvimento ou produção esteja configurado corretamente.
   - Dependências devem estar instaladas.
   - Execute o comando para iniciar o servidor local: 
     
     ```bash
     npm start
     ```
     ou
     ```bash
     docker-compose up
     ```

### 2. **Cenários de Teste**

#### **Cenário 1: Cadastro de Usuário**
   - **Dado que** o usuário acessa a tela de cadastro,
   - **Quando** ele preenche todos os campos obrigatórios e envia o formulário,
   - **Então** o sistema deve criar a conta do usuário com sucesso.

#### **Cenário 2: Adicionar Nova Despesa**
   - **Dado que** o usuário está autenticado,
   - **Quando** ele adiciona uma nova despesa,
   - **Então** a despesa deve aparecer no painel de gastos.

#### **Cenário 3: Definir Meta Financeira**
   - **Dado que** o usuário acessa a tela de metas,
   - **Quando** ele define uma nova meta financeira,
   - **Então** o sistema deve salvar e exibir a meta no painel principal.

### 3. **Critérios de Aceitação**
   - Todas as funcionalidades devem funcionar sem erros.
   - A interface deve ser responsiva e amigável.
   - Os dados inseridos devem ser corretamente salvos e exibidos.

---

## Validação Final

Após a execução dos testes, verifique se:
- Todos os cenários foram concluídos com sucesso.
- Não há erros ou comportamentos inesperados.
