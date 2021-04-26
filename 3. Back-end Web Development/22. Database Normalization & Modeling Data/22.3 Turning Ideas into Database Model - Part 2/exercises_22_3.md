### Agora, a prática:

##### Desafios sobre `VIEW`

1. Crie uma view chamada `film_with_categories` utilizando as tabelas `category` , `film_category` e `film` do banco de dados `sakila` . Essa view deve exibir o `título` do filme, o `id` da categoria e o `nome` da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo `título` do filme.

   

   ![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/viewexercise1-fef52cea07cee95dd99d48fdb57b6c0c.png)

   Resultado de exemplo para uma consulta na view do exercício 1

   ```sql
   CREATE VIEW film_with_categories AS
       SELECT 
           F.title, FC.category_id, C.name
       FROM
           film AS F
               INNER JOIN
           film_category AS FC ON F.film_id = FC.film_id
               INNER JOIN
           category AS C ON FC.category_id = C.category_id
       ORDER BY F.title;
   ```

   

2. Crie uma view chamada `film_info` utilizando as tabelas `actor` , `film_actor` e `film` do banco de dados `sakila` . Sua view deve exibir o `actor_id` , o nome completo do ator ou da atriz em uma coluna com o `ALIAS` `actor` e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

   

   ![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/view_challenge2-1f47971d7ea38db5dc88f30f44992141.png)

   Resultado de exemplo para uma consulta na view do exercício 2

   ```sql
   CREATE VIEW film_info AS
       SELECT 
           FA.actor_id,
           CONCAT(A.first_name, ' ', A.last_name) AS `actor`,
           F.title
       FROM
           sakila.film_actor AS FA
               INNER JOIN
           sakila.film AS F ON F.film_id = FA.film_id
               INNER JOIN
           sakila.actor AS A ON A.actor_id = FA.actor_id
       ORDER BY `actor`;
   ```

   

3. Crie uma view chamada `address_info` que faça uso das tabelas `address` e `city` do banco de dados `sakila` . Sua view deve exibir o `address_id` , o `address` , o `district` , o `city_id` e a `city` . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

   

   ![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/view_challenge3-b1142963942961cb118807f4caa9b18b.png)

   Resultado de exemplo para uma consulta na view do exercício 3

   

   ```sql
   CREATE VIEW address_info AS
       SELECT 
           A.address_id, A.address, A.district, A.city_id, C.city
       FROM
           sakila.address AS A
               INNER JOIN
           sakila.city AS C ON C.city_id = A.city_id
       ORDER BY C.city;
   ```

   

4. Crie uma view chamada `movies_languages` , usando as tabelas `film` e `language` do banco de dados `sakila` . Sua view deve exibir o **título do filme** , o **id do idioma** e o **idioma do filme** , como na imagem a seguir.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/view_challenge1-14c443a8f49c2350530c3aa45dcac8d8.png)

```sql
Resultado de `SELECT * FROM movies_languages`

CREATE VIEW movies_language AS
SELECT 
    F.title, F.language_id, L.name AS `language`
FROM
    film AS F
        INNER JOIN
    language AS L ON L.language_id = F.language_id;
```



##### Desafios sobre `INDEX`

1. Verifique o impacto de um `FULLTEXT INDEX` na tabela `category` (banco de dados `sakila` ), adicionando-o na coluna `name` . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

Copiar

```sql
-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
```



```sql
CREATE FULLTEXT INDEX category_name ON category(name);

SELECT * FROM category WHERE MATCH(name) AGAINST ('action');
-- Query cost: 0.35

DROP INDEX category_name ON category;

SELECT * FROM category WHERE name LIKE '%action%';
-- Query cost: 1.85
```



2.Verifique o impacto de um `INDEX` na tabela `address` (banco de dados `sakila` ) adicionando-o na coluna `postal_code` . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

Copiar

```sql
-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
```

```sql
CREATE INDEX postal_code_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost: 0.35

DROP INDEX postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost: 61.80
```



##### Desafios sobre `ALTER TABLE`

**Restaure o banco de dados `HR` abaixo antes de continuar, caso não o tenha restaurado em alguma lição anterior:**

O banco de dados usado como base para os próximos exercícios pode ser restaurado através [deste arquivo SQL. ](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql)l)

1. Baixe o conteúdo do arquivo `.sql` linkado acima;
2. Copie todo o código SQL;
3. Abra o MySQL Workbench e abra uma nova janela de query;
4. Cole o SQL para dentro dessa janela;
5. Selecione todo o código usando CTRL + A;
6. Execute-o teclando CTRL + ENTER.

**Desafios:**

1. Escreva uma query SQL para alterar o nome da coluna `street_address` para `address` , mantendo o mesmo tipo e tamanho de dados.

   ```sql
   ALTER TABLE locations CHANGE STREET_ADDRESS address VARCHAR(40);
   ```

   

2. Escreva uma query SQL para alterar o nome da coluna `region_name` para `region` , mantendo o mesmo tipo e tamanho de dados.

   ```sql
   ALTER TABLE regions CHANGE REGION_NAME region VARCHAR(25);
   ```

   

3. Escreva uma query SQL para alterar o nome da coluna `country_name` para `country` , mantendo o mesmo tipo e tamanho de dados.

   ```sql
   ALTER TABLE countries CHANGE COUNTRY_NAME country VARCHAR(40);
   ```

   