# Criando o Banco de Dados

```sql
CREATE DATABASE nodeapi;
```

## Criando a tabela 'books'

```sql
CREATE TABLE books (
    id serial PRIMARY KEY,
    title varchar (150) NOT NULL,
    author varchar (50) NOT NULL,
    pages_num integer NOT NULL,
    review text,
    date_added date DEFAULT CURRENT_TIMESTAMP);
```

## Inserindo registros

Primeiro registro: 
```sql
INSERT INTO books (title, author, pages_num, review)
VALUES (
    'A Tale of Two Cities',
    'Charles Dickens',
    489, 
    'A great classic!');
```

Outro registro: 

```sql
INSERT INTO books (title, author, pages_num, review)   
VALUES (
    'Anna Karenina',
    'Leo Tolstoy',
    864,
    'Another great classic!');  
 ````

## Guias de Uso

[Node.js, Express.js, and PostgreSQL: CRUD REST API example](https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/#whatisacrudapi)

[Tutorial de CRUD com Node.js, Sequelize e PostgreSQL](https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-postgresql/)
