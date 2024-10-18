# Dicionário de Dados
## Entidades

| Entidade | Nome do Relacionamento | Relacionamento | Descrição                                                                 |
|---|---|---|---|
| Usuário  | Possui                 | Ganho          | Um usuário pode ter vários registros de ganhos.                             |
| Usuário  | Possui                 | Despesa        | Um usuário pode ter várias despesas registradas.                           |
| Usuário  | Possui                 | Meta           | Um usuário pode definir várias metas financeiras.                          |
| Usuário  | Recebe                 | Dica           | Um usuário pode receber várias dicas de gestão financeira.                  |
| Ganho    | Pertence               | Usuário        | Cada registro de ganho pertence a um usuário.                              |
| Despesa  | Pertence               | Usuário        | Cada registro de despesa pertence a um usuário.                            |
| Meta     | Pertence               | Usuário        | Cada meta pertence a um usuário.                                           |
| Dica     | Destinada              | Usuário        | Cada dica é destinada a um usuário.                                         |

## Atributos das entidades
### Usuário 
|Atributo	|Tipo de Dados	|Comprimento	|Restrições|
|---|---|---|---|
|usuario_id	| inteiro	|4 bytes	|PK, NOT NULL, |AUTO INCREMENT|
|nome_usuario	|varchar	|255 bytes	|NOT NULL|
|email_usuario	|varchar	|255 bytes	|NOT NULL, UNIQUE|
|senha_usuario	|varchar	|255 bytes	|NOT NULL|
|curso_usuario	|varchar	|255 bytes	|NOT NULL|
|universidade_usuario	|varchar	|255 bytes	|NOT NULL|

### Ganho
|Atributo	|Tipo de Dados	|Comprimento	|Restrições|
|---|---|---|---|
|id_ganho	|inteiro	|4 bytes	|PK,NOT NULL, AUTO INCREMENT|
|usuario_id|	inteiro	|4 bytes	|FK,NOT NULL|
|tipo_ganho|	varchar	|255 bytes	|NOT NULL|
|valor_ganho	|Decimal	|10,2 bytes	|NOT NULL|
|data_ganho	|datetime	|8 bytes	|NOT NULL|

### Despesa
|Atributo	|Tipo de Dados	|Comprimento	|Restrições|
|---|---|---|---|
|id_despesa	|inteiro	|4 bytes	|PK, NOT NULL, AUTO INCREMENT|
|usuario_id|	inteiro|	4 bytes	|FK, NOT NULL|
|tipo_despesa	|varchar|	255 bytes	|NOT NULL|
|valor_despesa	|Decimal	|10,2 bytes|	NOT NULL|
|data_despesa	|datetime	|8 bytes	|NOT NULL|

### Meta
|Atributo	|Tipo de Dados	|Comprimento	|Restrições|
|---|---|---|---|
|id_meta	|inteiro	|4 bytes	|PK, NOT NULL, AUTO INCREMENT|
|usuario_id	|inteiro	|4 bytes	|FK, NOT NULL|
|descricao_meta	|varchar	|255 bytes	|NOT NULL|
|valor_meta	|Decimal	|10,2 bytes	|NOT NULL|
|data_inicio	|datetime	|8 bytes	|NOT NULL|
|data_fim	|datetime	|8 bytes	|NOT NULL|

### Dica
|Atributo	|Tipo de Dados	|Comprimento	|Restrições|
|---|---|---|---|
|id_dica	|inteiro	|4 bytes	|PK, NOT NULL, AUTO INCREMENT|
|usuario_id	|inteiro	|4 bytes	|FK, NOT NULL|
|conteudo_dica	|varchar	|255 bytes	|NOT NULL|
|data_dica	|datetime	|8 bytes	|NOT NULL|
