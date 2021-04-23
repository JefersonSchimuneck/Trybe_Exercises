### Exercícios de fixação - normalização de dados

Vamos consolidar toda a explicação passada até o momento através de alguns desafios.

**Exercício 1:** Normalize a tabela a seguir para a 1ª Forma Normal.

Não se preocupe em montar a estrutura em código `SQL` neste primeiro momento. Crie apenas uma planilha (Excel, Google Sheets, Open Office Calc ou semelhantes) da estrutura esperada.



| Funcionario_id | Nome     | Sobrenome | Contato                  | Contato         | DataCadastro           | Setor                 |
| -------------- | -------- | --------- | ------------------------ | --------------- | ---------------------- | --------------------- |
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25    | Administração, Vendas |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 5 de Fevereiro de 2020 | Operacional           |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35    | Estratégico, Vendas   |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40    | Marketing             |

| Funcionario_id | Nome     | Sobrenome | Email                    | Telefone        | DataCadastro        | Setor                 |
| -------------- | -------- | --------- | ------------------------ | --------------- | ------------------- | --------------------- |
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25 | Administração, Vendas |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 2020-02-05 08:00:00 | Operacional           |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35 | Estratégico, Vendas   |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40 | Marketing             |

**Exercício 2:** Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.

| Funcionario_id | Nome     | Sobrenome | Email                    | Telefone        | DataCadastro        | Setor |
| -------------- | -------- | --------- | ------------------------ | --------------- | ------------------- | ----- |
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25 | 1     |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 2020-02-05 08:00:00 | 2     |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35 | 3     |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40 |      4 |

| Setor_id | Nome                  |
| -------- | --------------------- |
| 1        | Administração, Vendas |
| 2        | Operacional           |
| 3        | Estratégico, Vendas   |
| 4        | Marketing             |

