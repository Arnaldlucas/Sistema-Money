# **Validação da Usabilidade do Sistema +Money**

  Este documento tem como objetivo principal descrever o processo de validação de usabilidade aplicado ao sistema +Money, o propósito é assegurar que cada tela feita no projeto atenda aos requisitos de acordo com as heuristicas criadas por Jakob Nielsen. Para o sistema +Money, o processo de validação de usabilidade foi realizado com o intuito de verificar e documentar, os possiveis erros e problemas encontrados na interface do sistema

Aqui está o conteúdo transformado em formato Markdown (.md):

# Tela de Login / Cadastro no sistema

- **Visibilidade do status do sistema**: Não há detalhes específicos sobre feedback ao usuário. É importante que o sistema informe claramente se o login/cadastro foi bem-sucedido ou se houve algum erro.
- **Prevenção de erros**: Um possível problema é permitir que o usuário tente se cadastrar sem preencher todos os campos. O sistema deveria evitar essa situação com a validação de campos obrigatórios.
- **Reconhecimento em vez de memorização**: O formulário deve ser intuitivo e não exigir que o usuário memorize informações ou etapas.
- **Erro ao cadastrar e login quando as informações estão vazias ou não cadastradas**:
  - **Correção de erros**: O sistema deve oferecer mensagens de erro claras e ações corretivas, como destacar os campos obrigatórios que faltam.
  - **Ajuda e documentação**: Seria útil incluir orientações sobre o formato de dados esperado (e.g., e-mail, senha).

# Tela Inicial do aplicativo

- **Design estético e minimalista**: Esta tela deve exibir informações essenciais sem sobrecarregar o usuário. Focar em facilitar a navegação para as principais funções do app.
- **Flexibilidade e eficiência de uso**: Oferecer atalhos ou navegação rápida para usuários experientes pode ser benéfico.

# Tela ao adicionar uma despesa

- **Prevenção de erros**: Validar os dados inseridos pelo usuário (por exemplo, valores numéricos e datas).
- **Consistência e padrões**: Certificar-se de que os campos seguem o mesmo padrão de entrada em todo o aplicativo.

# Tela de Selecionar uma região / Tela com a região adicionada e um valor

- **Correspondência entre o sistema e o mundo real**: Usar terminologias que o usuário compreenda e garantir que a seleção de região esteja alinhada com a expectativa do usuário (exemplo: mapa interativo).
- **Flexibilidade e eficiência de uso**: O sistema poderia permitir a seleção rápida de regiões favoritas ou mais usadas.

# Tela com o gráfico gerado de acordo com a renda

- **Visibilidade do status do sistema**: Exibir claramente os dados usados para gerar o gráfico e permitir que o usuário saiba o que está vendo e como interagir com o gráfico.
- **Ajuda e documentação**: Se gráficos complexos forem usados, incluir uma legenda ou ajuda visual seria uma boa prática.

# Tela para adicionar uma meta para a poupança

- **Prevenção de erros**: Verificar a entrada de dados (evitar valores irreais ou negativos).
- **Flexibilidade e eficiência de uso**: Permitir que o usuário adicione metas de forma rápida com valores predefinidos ou editáveis.

# Tela com os valores da poupança adicionados

- **Visibilidade do status do sistema**: Os valores devem ser apresentados de maneira clara, com distinção visual entre entradas antigas e recentes.
- **Design estético e minimalista**: A disposição dos valores deve ser visualmente organizada para evitar sobrecarga de informações.

# Tela de erro ao tentar adicionar um valor negativo à poupança (está correta)

- **Correção de erros**: Como mencionado, o sistema impede a entrada de valores negativos, o que é um comportamento esperado.
- **Ajuda e documentação**: Uma mensagem de erro clara deve ser apresentada com a explicação do porquê o valor não pode ser negativo.

# Tela quando o campo de “meta” está em branco

- **Correção de erros**: Informar ao usuário que o campo é obrigatório e não permitir prosseguir sem preenchê-lo.
- **Prevenção de erros**: Poderia ser útil sugerir valores automáticos caso o campo esteja vazio, como uma meta padrão.

# Tela com todos os valores aplicados

- **Visibilidade do status do sistema**: Apresentar um resumo claro com os valores aplicados, metas atingidas e saldo atual de forma organizada.
- **Reconhecimento em vez de memorização**: O usuário deve conseguir verificar rapidamente a situação da poupança sem precisar se lembrar de detalhes previamente inseridos.

Esses pontos são baseados nos princípios de usabilidade de Nielsen, focando na eficiência e na facilidade de uso para garantir uma boa experiência do usuário.

| **Heurísticas Violadas**                                     | **Quantidade** |
|-------------------------------------------------------------|---------------|
| Visibilidade do estado do sistema (H1)                      | 5             |
| Correspondência entre o sistema e o mundo real (H2)         | 3             |
| Controle e liberdade do usuário (H3)                        | 6             |
| Consistência e padronização (H4)                            | 4             |
| Prevenção de erros (H5)                                     | 4             |
| Reconhecimento em vez de lembrar (H6)                       | 2             |
| Flexibilidade e eficiência de uso (H7)                      | 2             |
| Estética e design minimalista (H8)                          | 3             |
| Ajudar os usuários a reconhecerem, diagnosticarem e corrigirem erros (H9) | 3             |
| Ajuda e documentação (H10)                                  | 1             |

### Tabela 2 – Quantidade de severidades determinadas

| **Severidade**  | **Quantidade** |
|----------------|----------------|
| 0 – Falso-Positivo | 0              |
| 1 – Cosmético       | 18             |
| 2 – Leve            | 10             |
| 3 – Grande          | 5              |

