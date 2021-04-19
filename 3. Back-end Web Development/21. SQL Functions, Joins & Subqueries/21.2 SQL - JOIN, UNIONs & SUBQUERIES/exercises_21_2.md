## Exercícios de fixação



Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o `INNER JOIN` , utilizando o banco de dados `sakila` . Antes de começar a escrever suas *queries* , identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

1. Monte uma *query* que exiba o **id do ator** , **nome do ator** e **id do filme** em que ele já atuou usando as tabelas `actor` e `film_actor` .

   ```sql
   SELECT A.actor_id, A.first_name, F.film_id
   FROM actor AS A
   INNER JOIN film_actor AS F
   ON A.actor_id = F.actor_id;
   ```

   

2. Use o `JOIN` para exibir o **nome** , **sobrenome** e **endereço** de cada um dos funcionários do banco. Use as tabelas `staff` e `address` .

   ```sql
   SELECT S.first_name, S.last_name, A.address
   FROM staff as S
   INNER JOIN address as A
   ON S.address_id = A.address_id;
   ```

   

3. Exiba o **id do cliente** , **nome** e **email** dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o **id do endereço** e o **nome da rua** onde o cliente mora. Essas informações podem ser encontradas nas tabelas `customer` e `address` .

   ```sql
   SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
   FROM customer AS C
   INNER JOIN address AS A
   ON C.address_id = A.address_id
   ORDER BY C.first_name DESC
   LIMIT 100;
   ```

   

4. Exiba o **nome** , **email** , **id do endereço** , **endereço** e **distrito** dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas `address` e `customer` .

   ```sql
   SELECT C.first_name, C.email, C.address_id, A.address, A.district
   FROM customer AS C
   INNER JOIN address AS A
   ON C.address_id = A.address_id
   WHERE A.district = 'California' AND C.first_name LIKE '%rene%';
   ```

   

5. Exiba o **nome** e a **quantidade de endereços** dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela `address` e `customer` .

   ```sql
   SELECT C.first_name, COUNT(A.address)
   FROM customer AS C
   INNER JOIN address AS A
   ON C.address_id = A.address_id
   WHERE C.active = 1
   GROUP BY C.first_name
   ORDER BY C.first_name DESC;
   ```

   

6. Monte uma *query* que exiba o **nome** , **sobrenome** e a **média de valor** ( `amount` ) paga aos funcionários no ano de 2006. Use as tabelas `payment` e `staff` . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

   ```sql
   SELECT S.first_name, S.last_name, AVG(P.amount)
   FROM staff AS S
   INNER JOIN payment AS P
   ON S.staff_id = P.staff_id
   WHERE YEAR(P.payment_date) = 2006
   GROUP BY S.first_name, S.last_name;
   ```

   

7. Monte uma *query* que exiba o **id do ator** , **nome** , **id do filme** e **título do filme** , usando as tabelas `actor` , `film_actor` e `film` . Dica: você precisará fazer mais de um `JOIN` na mesma *query* .

   ```sql
   SELECT A.actor_id, A.first_name, FA.film_id, F.title
   FROM actor AS A
   INNER JOIN film_actor FA
   ON A.actor_id = FA.actor_id
   INNER JOIN film AS F
   ON F.film_id = FA.film_id;
   ```



1. Queremos saber os **ids** e **custos de substituição** dos filmes que possuem o mesmo custo de substituição.

   ```sql
   SELECT A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
   FROM film AS A, film AS B
   WHERE A.replacement_cost = B.replacement_cost;
   ```

   

2. Exiba o **título** e a **duração de empréstimo** dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

   ```sql
   SELECT A.title, A.rental_duration, B.title, B.rental_duration
   FROM film AS A, film AS B
   WHERE A.rental_duration = B.rental_duration
   AND A.rental_duration BETWEEN 2 AND 4;
   ```



1. Todos os funcionários foram promovidos a atores. Monte uma *query* que exiba a união da tabela `staff` com a tabela `actor` , exibindo apenas o `nome` e o `sobrenome` . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.

   ```sql
   SELECT first_name, last_name FROM actor
   UNION ALL
   SELECT first_name, last_name FROM staff;
   ```

   

2. Monte uma *query* que una os resultados das tabelas `customer` e `actor` , exibindo os nomes que contêm a palavra "tracy" na tabela `customer` e os que contêm "je" na tabela `actor` . Exiba apenas os resultados únicos.

   ```sql
   SELECT first_name FROM customer
   WHERE first_name LIKE '%tracy%'
   UNION
   SELECT first_name FROM actor
   WHERE first_name LIKE '%je%';
   ```

   

3. Monte uma *query* que exiba a união dos cinco últimos **nomes** da tabela `actor` , o primeiro nome da tabela `staff` e cinco **nomes** a partir da 15ª posição da tabela `customer` . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.

   ```sql
   (SELECT first_name FROM actor ORDER BY actor_id DESC LIMIT 5)
   UNION
   (SELECT first_name FROM staff LIMIT 1)
   UNION
   (SELECT first_name FROM customer LIMIT 5 offset 15)
   ORDER BY first_name;
   ```

   

4. Você quer exibir uma lista paginada com os **nomes** e **sobrenomes** de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma *query* que simule esse cenário.

   ```sql
   (SELECT first_name, last_name
    FROM   sakila.customer
    ORDER  BY first_name, last_name
    LIMIT  60)
   UNION
   (SELECT first_name, last_name
    FROM   sakila.actor
    ORDER  BY first_name, last_name
    LIMIT  60)
   ORDER  BY first_name, last_name
   LIMIT 15
   OFFSET 45;
   ```



##### Vamos Praticar um pouco mais sobre o exists

Use o [banco de dados hotel ](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hotel-6969e872405a203072b3d984f5fbdea8.sql)l) para realizar os desafios a seguir:

1. Usando o `EXISTS` na tabela `books_lent` e `books` , exiba o **id** e **título** dos livros que ainda não foram emprestados.

   ```sql
   SELECT Id, Title FROM Books AS B
   WHERE NOT EXISTS
   (SELECT * FROM Books_Lent WHERE B.id = book_id);
   ```

   

2. Usando o `EXISTS` na tabela `books_lent` e `books` , exiba o **id** e **título** dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

   ```sql
   SELECT Id, Title FROM Books AS B
   WHERE EXISTS
   (SELECT * FROM Books_Lent
   WHERE B.id = book_id AND rental_return_date IS NULL AND B.Title LIKE '%lost%');
   ```

   

3. Usando a tabela `carsales` e `customers` , exiba apenas o nome dos clientes que ainda não compraram um carro.

   ```sql
   SELECT Name FROM Customers AS C
   WHERE NOT EXISTS (SELECT * FROM CarSales WHERE C.CustomerId = CustomerId);
   ```

   

4. Usando o comando `EXISTS` em conjunto com `JOIN` e as tabelas `cars` , `customers` e `carsales` , exiba o **nome do cliente** e o **modelo do carro** de todos os clientes que fizeram compras de carros.

   ```sql
   SELECT CAR.Name, CUS.Name FROM Cars AS CAR
   INNER JOIN Customers AS CUS
   WHERE EXISTS
   (SELECT * FROM CarSales WHERE CustomerId = CUS.CustomerId AND CarId = CAR.Id);
   ```

   

### Agora a prática

Faça os exercícios 1 a 12 utilizando banco de dados `Pixar` abaixo:

```sql
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES Theater (id)
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL

);

INSERT INTO Theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO Movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
```



**Exercício 1:** Utilizando o `INNER JOIN` , encontre as vendas nacionais ( `domestic_sales` ) e internacionais ( `internationa_sales` ) de cada filme.

```sql
SELECT M.title, B.domestic_sales, B.international_sales
FROM BoxOffice as B
INNER JOIN Movies as M
ON B.movie_id = M.id;
```



**Exercício 2:** Utilizando o `INNER JOIN` , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( `internationa_sales` ) do que vendas nacionais ( `domestic_sales` ).

```sql
SELECT M.title, B.domestic_sales, B.international_sales
FROM BoxOffice as B
INNER JOIN Movies as M
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;
```



**Exercício 3:** Utilizando o `INNER JOIN` , faça uma busca que retorne os filmes e sua avaliação ( `rating` ) em ordem decrescente.

```sql
SELECT M.title, B.rating
FROM Movies as M
INNER JOIN BoxOffice as B
ON M.id = B.movie_id
ORDER BY B.rating DESC;
```



**Exercício 4:** Utilizando o `LEFT JOIN` , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

```sql
SELECT T.name, T.location, M.Title, M.Director
FROM Theater AS T
LEFT JOIN Movies as M
ON T.id = M.theater_id
ORDER BY T.name;
```



**Exercício 5:** Utilizando o `RIGHT JOIN` , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

```sql
SELECT T.name, T.location, M.Title, M.Director
FROM Theater AS T
RIGHT JOIN Movies as M
ON T.id = M.theater_id
ORDER BY T.name;
```



**Exercício 6:** Faça duas buscas, uma utilizando `SUBQUERY` e outra utilizando `INNER JOIN` , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

```sql
SELECT title FROM Movies
WHERE id IN
(SELECT movie_id FROM BoxOffice WHERE rating > 7.5);



SELECT M.title
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id AND B.rating > 7.5;
```



**Exercício 7:** Faça duas buscas, uma utilizando `SUBQUERY` e outra utilizando `INNER JOIN` , que retornem as avaliações dos filmes lançados depois de 2009.

```sql
SELECT rating FROM BoxOffice
WHERE movie_id IN (SELECT id FROM Movies WHERE year > 2009);

SELECT b.rating
FROM BoxOffice b
INNER JOIN Movies m
ON b.movie_id = m.id
WHERE m.year > 2009;
```



**Exercício 8:** Utilizando o `EXISTS` , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

```sql
SELECT name, location FROM Theater AS T
WHERE EXISTS (SELECT * FROM Movies WHERE theater_id = T.id);
```



**Exercício 9:** Utilizando o `EXISTS` , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

```sql
SELECT name, location FROM Theater AS T
WHERE NOT EXISTS (SELECT * FROM Movies WHERE theater_id = T.id);
```



**Exercício 10:** Utilizando o `INNER JOIN` , selecione todas as informações dos filmes com avaliação maior que 8.

```sql
SELECT M.* FROM Movies AS M
INNER JOIN BoxOffice as B
ON M.id = B.movie_id
WHERE B.rating > 8 AND M.theater_id IS NOT NULL;
```



**Exercício 11:** Utilizando o `SELF JOIN` , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

```sql
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Movies t1, Movies t2
WHERE t1.director = t2.director and t1.title <> t2.title;
```



**Exercício 12:** Faça duas buscas, uma utilizando `SUBQUERY` e outra utilizando `INNER JOIN` , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

```sql
SELECT m.title
FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
WHERE b.international_sales >= 500000000 AND m.length_minutes > 110;

SELECT m.title
FROM Movies m
WHERE m.id IN (
    SELECT b.movie_id FROM BoxOffice b
    WHERE b.international_sales >= 500000000
)
AND m.length_minutes > 110;
```

