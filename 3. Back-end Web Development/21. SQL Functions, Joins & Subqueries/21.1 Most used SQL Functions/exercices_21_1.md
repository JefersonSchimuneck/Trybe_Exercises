## Exercícios

**Restaure o banco de dados abaixo antes de continuar:**

Para realizar os exercícios propostos para o dia, **faremos uso da tabela `employees`** do banco de dados `hr`. O banco de dados ser gerado e restaurado usando [este arquivo SQL ](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql)).



##### Exercícios

**1.** Escreva uma query que exiba o maior salário da tabela.

```sql
SELECT MAX(SALARY) FROM employees;
```



**2.** Escreva uma query que exiba a diferença entre o maior e o menor salário.

```sql
SELECT MAX(SALARY) - MIN(SALARY) FROM employees;
```



**3.** Escreva uma query que exiba a média salarial de cada `JOB_ID` , ordenando pela média salarial em ordem decrescente.

```sql
SELECT JOB_ID, AVG(SALARY) FROM employees
GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC;
```



**4.** Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

```sql
SELECT SUM(SALARY) FROM employees;
```



**5.** Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

```sql
SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2)
FROM employees;
```



**6.** Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( `IT_PROG` ).

```sql
SELECT COUNT(JOB_ID) FROM employees
WHERE JOB_ID = 'IT_PROG';
```



**7.** Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( `JOB_ID` ).

```sql
SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID;
```



**8.** Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( `IT_PROG` ).

```sql
SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
```



**9.** Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( `IT_PROG` ).

```sql
SELECT JOB_ID, AVG(SALARY) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVG(SALARY) DESC;
```



**10.** Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. **Dica:** agrupe pelo `department_id` .

```sql
SELECT COUNT(DEPARTMENT_ID), AVG(SALARY) FROM employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(DEPARTMENT_ID) > 10;
```



**11.** Escreva uma query que atualize a coluna `PHONE_NUMBER` , de modo que todos os telefones iniciados por `515` agora devem iniciar com `777` .

```sql
UPDATE employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';
```



**12.** Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

```sql
SELECT * FROM employees
WHERE LENGTH(FIRST_NAME) > 7;
```



**13.** Escreva uma query que exiba as seguintes informações de cada funcionário: `id` , `primeiro nome` e `ano no qual foi contratado` (exiba somente o ano).

```sql
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM employees;
```



**14.** Escreva uma query que exiba as seguintes informações de cada funcionário: `id` , `primeiro nome` e `dia do mês no qual foi contratado` (exiba somente o dia).

```sql
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM employees;
```



**15.** Escreva uma query que exiba as seguintes informações de cada funcionário: `id` , `primeiro nome` e `mês no qual foi contratado` (exiba somente o mês).

```sql
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM employees;
```



**16.** Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

```sql
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM employees;
```



**17:** Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

```sql
SELECT LAST_NAME, HIRE_DATE FROM employees
WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987;
```



**18:** Escreva uma query que exiba as seguintes informações de cada funcionário: `nome` , `sobrenome` , `tempo que trabalha na empresa (em dias)` .

```sql
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE)
FROM employees;
```

