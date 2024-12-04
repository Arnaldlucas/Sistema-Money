# Estratégia de Testes

## Técnicas e Métodos Utilizados

A estratégia de teste adotada para o sistema **+Money** foca na validação de suas funcionalidades críticas por meio de **testes de caixa preta**, utilizando o framework **Cypress**. Os testes de caixa preta verificam o comportamento do sistema com base em suas entradas e saídas, sem considerar a implementação interna. A abordagem inclui:

### 1. **Testes Funcionais**
Valida se cada funcionalidade do sistema opera conforme os requisitos especificados. Os seguintes casos de teste foram aplicados:
- **Registro de Usuário**: Verificação do fluxo de registro.
- **Login de Usuário**: Validação do acesso com credenciais corretas.
- **Registro de Nova Transação**: Teste do fluxo para adicionar uma nova transação.
- **Edição de Transação**: Validação da atualização de transações existentes.
- **Exclusão de Transação**: Teste do processo de remoção de transações.

### 2. **Testes de Interface**
Avalia a interação do usuário com a interface para garantir que a experiência seja fluida e os elementos visuais estejam corretamente posicionados.
- **Geração de Gráfico de Despesas**: Verifica a exibição correta de gráficos com base nas transações.
- **Edição de Perfil do Usuário**: Valida a atualização de dados do perfil através da interface.

### 3. **Testes de Segurança**
Assegura que dados sensíveis e áreas restritas do sistema estejam protegidos contra acessos não autorizados.
- **Controle de Acesso à Área Restrita**: Garante que somente usuários autenticados possam acessar o dashboard.
- **Recuperação de Senha**: Valida o envio do e-mail de recuperação.

### 4. **Testes de Persistência de Dados**
Certifica-se de que os dados financeiros e de metas sejam corretamente armazenados e exibidos.
- **Criação de Meta Financeira**: Valida o registro de metas e sua correta persistência no banco de dados.

## Ferramentas Utilizadas

### Cypress
- **Descrição**: Framework de teste end-to-end.
- **Motivo da Escolha**: Cypress permite automação eficiente de testes funcionais e de interface, proporcionando resultados rápidos e detalhados.
