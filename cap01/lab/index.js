const express = require('express')
const bodyParser = require('body-parser')
const books = require('./queries/books')
const reviews = require('./queries/reviews')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  }); 

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

// Books 
app.get('/books', books.getBooks);
app.get('/books/:id', books.getBookById);
app.post('/books', books.createBook);
app.delete('/books/:id', books.deleteBook);
app.put('/books/:id', books.updateBook);

// Reviews
app.get('/reviews', reviews.getAllReviews);
app.get('/reviews/:id', reviews.getReviewById);
app.get('/book/reviews/:id', reviews.getReviewsByIdBook);
app.post('/:book_id/review', reviews.createReview);
app.delete('/review/:review_id', reviews.deleteReview);
app.put('/:book_id/:review_id', reviews.updateReview);
