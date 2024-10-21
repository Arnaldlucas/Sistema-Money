# **Validação da Usabilidade do Sistema +Money**

Este documento tem como objetivo principal descrever o processo de validação de usabilidade aplicado ao sistema +Money, o propósito é assegurar que cada tela feita no projeto atenda aos requisitos de acordo com as heuristicas criadas por Jakob Nielsen. Para o sistema +Money, o processo de validação de usabilidade foi realizado com o intuito de verificar e documentar, os possiveis erros e problemas encontrados na interface do sistema

A validação de usabilidade é uma etapa essencial no desenvolvimento de um sistema, com o propósito de assegurar que o mesmo atenda às expectativas dos usuários em termos de facilidade de uso, eficiência e satisfação, esse processo tem como principal objetivo identificar possíveis problemas na interface que possam impactar negativamente a experiência do usuário, através dessa validação, é possível corrigir erros e aperfeiçoar o sistema para garantir que ele seja funcional e intuitivo, promovendo uma experiência positiva para o usuário final.

### Heurísticas de Jakob Nielsen

Para conduzir o processo de validação de usabilidade no sistema **+Money**, foram utilizadas as 10 heurísticas de usabilidade criadas por Jakob Nielsen, que são diretrizes amplamente aceitas no campo de design de interfaces, as heurísticas ajudam a identificar problemas na interação do usuário com o sistema, e são as seguintes:

1. **Visibilidade do status do sistema**: O sistema deve sempre manter o usuário informado sobre o que está acontecendo, proporcionando feedback adequado em tempo hábil.

2. **Correspondência entre o sistema e o mundo real**: O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares, em vez de termos técnicos.

3. **Controle e liberdade do usuário**: Usuários frequentemente realizam ações por engano e precisam de uma "saída de emergência" clara, como a função de desfazer ou cancelar.

4. **Consistência e padrões**: Os usuários não devem precisar se perguntar se diferentes palavras, ações ou situações significam a mesma coisa; a consistência é essencial.

5. **Prevenção de erros**: É melhor prevenir a ocorrência de problemas do que apenas oferecer boas mensagens de erro.

6. **Reconhecimento em vez de memorização**: O usuário não deve ser obrigado a lembrar informações de uma parte do sistema para outra. As instruções devem ser visíveis ou facilmente acessíveis sempre que necessário.

7. **Flexibilidade e eficiência de uso**: O sistema deve atender tanto usuários iniciantes quanto avançados, permitindo atalhos que acelerem as interações para os mais experientes.

8. **Design estético e minimalista**: As interfaces não devem conter informações irrelevantes ou raramente necessárias. Todo elemento extra reduz a visibilidade das informações realmente relevantes.

9. **Ajudar os usuários a reconhecer, diagnosticar e corrigir erros**: As mensagens de erro devem ser expressas em linguagem simples, indicando o problema e sugerindo uma solução.

10. **Ajuda e documentação**: Mesmo que o sistema possa ser usado sem documentação, é importante fornecer ajuda e documentação acessíveis para casos excepcionais.


## Tela de Login / Cadastro no sistema

![Tela de login](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/Login.png)
![Tela de Cadastro](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/Cadastro.png)
- **Visibilidade do status do sistema**: Não há detalhes específicos sobre feedback ao usuário. É importante que o sistema informe claramente se o login/cadastro foi bem-sucedido ou se houve algum erro.
- **Prevenção de erros**: Um possível problema é permitir que o usuário tente se cadastrar sem preencher todos os campos. O sistema deveria evitar essa situação com a validação de campos obrigatórios.
- **Reconhecimento em vez de memorização**: O formulário deve ser intuitivo e não exigir que o usuário memorize informações ou etapas.
- **Erro ao cadastrar e login quando as informações estão vazias ou não cadastradas**:
  - **Correção de erros**: O sistema deve oferecer mensagens de erro claras e ações corretivas, como destacar os campos obrigatórios que faltam.
  - **Ajuda e documentação**: Seria útil incluir orientações sobre o formato de dados esperado (e.g., e-mail, senha).

## Tela Inicial do aplicativo
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/telaInicial.png)
- **Design estético e minimalista**: Esta tela deve exibir informações essenciais sem sobrecarregar o usuário. Focar em facilitar a navegação para as principais funções do app.
- **Flexibilidade e eficiência de uso**: Oferecer atalhos ou navegação rápida para usuários experientes pode ser benéfico.

## Tela ao adicionar uma despesa
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/registroDespesa.png)
- **Prevenção de erros**: Validar os dados inseridos pelo usuário (por exemplo, valores numéricos e datas).
- **Consistência e padrões**: Certificar-se de que os campos seguem o mesmo padrão de entrada em todo o aplicativo.

## Tela de Adicionar uma fonte de renda / Tela com a fonte adicionada e um valor
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/sele%C3%A7%C3%A3oTipoReceita.png)
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/registroReceita.png)
- **Correspondência entre o sistema e o mundo real**: Usar terminologias que o usuário compreenda e garantir que a seleção de "tipo de renda" esteja alinhada com a expectativa do usuário.
- **Flexibilidade e eficiência de uso**: O sistema poderia permitir a seleção rápida de 2 favoritas ou mais usadas.

## Tela com o gráfico gerado de acordo com a renda
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/radarGastos.png)
- **Visibilidade do status do sistema**: Exibir claramente os dados usados para gerar o gráfico e permitir que o usuário saiba o que está vendo e como interagir com o gráfico.
- **Ajuda e documentação**: Se gráficos complexos forem usados, incluir uma legenda ou ajuda visual seria uma boa prática.

## Tela para adicionar uma meta para a poupança
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/definicaoMeta.png)
- **Prevenção de erros**: Verificar a entrada de dados (evitar valores irreais ou negativos).
- **Flexibilidade e eficiência de uso**: Permitir que o usuário adicione metas de forma rápida com valores predefinidos ou editáveis.

## Tela com os valores da poupança adicionados
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/metaComValores.png)
- **Visibilidade do status do sistema**: Os valores devem ser apresentados de maneira clara, com distinção visual entre entradas antigas e recentes.
- **Design estético e minimalista**: A disposição dos valores deve ser visualmente organizada para evitar sobrecarga de informações.

## Tela de erro ao tentar adicionar um valor negativo à poupança (está correta)
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/metaNegativa.png)
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/falhaMetaNegativa.png)
- **Correção de erros**: Como mencionado, o sistema impede a entrada de valores negativos, o que é um comportamento esperado.
- **Ajuda e documentação**: Uma mensagem de erro clara deve ser apresentada com a explicação do porquê o valor não pode ser negativo.

## Tela quando o campo de “meta” está em branco

![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/metaNula.png)
![Tela Inicial](https://github.com/Arnaldlucas/Sistema-Money/blob/main/Diret%C3%B3rio%20de%20Valida%C3%A7%C3%A3o/Imagens/falhaMetaNula.png)
- **Correção de erros**: Informar ao usuário que o campo é obrigatório e não permitir prosseguir sem preenchê-lo.
- **Prevenção de erros**: Poderia ser útil sugerir valores automáticos caso o campo esteja vazio, como uma meta padrão.


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

