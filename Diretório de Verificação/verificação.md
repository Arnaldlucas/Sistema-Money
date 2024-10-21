# Atividade de Verificação

Este documento tem como objetivo principal descrever o processo de verificação aplicado ao sistema **Ordem de Serviço**, cujo propósito é assegurar que cada serviço e/ou produto gerado no projeto atenda aos requisitos especificados de maneira adequada. Para o sistema **Ordem de Serviço**, o processo de verificação foi realizado com o intuito de identificar e documentar pelo menos 10 defeitos em diversos artefatos de software, incluindo: **Backlog do Produto**, **Diagrama de Classes**, **Código Fonte** do sistema.

A verificação foi baseada na taxonomia de anomalias de software conforme o padrão **IEEE 1044 (2010)**, que classifica os defeitos em cinco categorias principais: **Dados**, **Interface**, **Lógica**, **Sintaxe** e **Padrões**. Além disso, utilizamos a taxonomia de defeitos de documentos de requisitos definida por **Shull (1998)**, baseada no padrão **IEEE 830 (1998)**, que classifica os defeitos em: **Omissão**, **Ambiguidade**, **Inconsistência**, **Fato Incorreto** e **Informação Estranha**.

Durante a inspeção do sistema **Ordem de Serviço**, foram identificados e documentados um total de **10 defeitos** distribuídos entre os artefatos citados. Esses defeitos foram detalhadamente registrados em tabelas seguindo o modelo orientado em sala de aula. 

Todas as **issues** e os respectivos **relatórios de defeitos** estão disponíveis publicamente e podem ser acessados para consulta e acompanhamento das correções através do seguinte link: [Problema encontrado no +Money](https://github.com/Arnaldlucas/Sistema/issues). 

Neste repositório, cada defeito está documentado com descrições completas, detalhando sua severidade, prioridade e os tipos de falhas detectadas (como omissões, fatos incorretos, inconsistências, etc.). As tabelas de falhas também estão incluídas para auxiliar o leitor no processo de análise e compreensão dos problemas encontrados, facilitando a tomada de decisões para ajustes e melhorias no sistema.

Este processo de verificação garante que o sistema **+Money** evolua conforme os padrões de qualidade estabelecidos, proporcionando uma base sólida para garantir sua robustez, funcionalidade e confiabilidade no uso.


# Tabela de Falhas para “Referências de falhas”
| Falha                                      | ID        | Descrição                                                                                                                                                                     |
|--------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cadastro de Usuários sem Verificação       | ID-001-2024    |  A classe `Dica` não possui um método para visualizar dicas, limitando a usabilidade.     |
| Login com Dados Inválidos                  | ID-002-2024  | O sistema permite que usuários façam login com e-mails não verificados, resultando em acesso não autorizado e comprometendo a segurança da conta.                 |
| Falta de Confirmação de Atualização       | ID-003-2024    | A classe `Usuario` não possui um método para verificar se o e-mail fornecido é válido, o que pode permitir cadastros inválidos.   |
| Metas Não Acompanhadas                     | ID-004-2024    | O sistema não envia um código de confirmação ao atualizar dados sensíveis, como senhas, aumentando o risco de alterações indevidas por usuários não autorizados.   |
| Dicas de Gestão Genéricas                  | ID-005-2024    | O gráfico de radar apresenta dados financeiros de maneira ambígua, dificultando a compreensão e análise por parte do usuário, o que pode levar a decisões financeiras inadequadas.      |
| Ambiguidade nos Gráficos                   | ID-006-2024    |O sistema fornece dicas de gestão financeira que não consideram as metas pessoais do usuário, tornando-as menos relevantes e úteis para a situação financeira individual. |
| Falta de Segurança em Dados Sensíveis      | ID-007-2024    | O sistema não envia um código de confirmação ao atualizar dados sensíveis, como senhas, aumentando o risco de alterações indevidas por usuários não autorizados.                             |
| Falta de Segurança em Dados Sensíveis      | ID-008-2024    | Métodos de `deletar()` em Ganho e Despesa são redundantes, o que pode causar confusão.                             |
| Falta de Segurança em Dados Sensíveis      | ID-009-2024    | O sistema não notifica os usuários quando atingem os limites de gastos mensais definidos nas metas, resultando em dificuldades na gestão financeira e possível descontrole.                             |
| Falta de Segurança em Dados Sensíveis      | ID-010-2024    | O método `listar_dica()` está ausente da classe `Dica`, impossibilitando a listagem de dicas cadastradas, o que impacta negativamente a experiência do usuário.                             |
