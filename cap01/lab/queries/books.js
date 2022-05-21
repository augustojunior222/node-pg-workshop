const pool = require('../config.db')


// Books
const getBooks = (request, response) => {
	pool.query('SELECT * FROM books', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const getBookById = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('SELECT * FROM books WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createBook = (request, response) => {
	const { title, author, pages_num, review } = request.body

	pool.query('INSERT INTO books (title, author, pages_num, review) VALUES ($1,$2,$3,$4) ', [title, author, pages_num, review], (error, results) => {
		if (error) {
			throw error
		}
		response.status(201).json(results.rows);
	})
}

const updateBook = (request, response) => {
	const id = parseInt(request.params.id)
	const { title, author, pages_num, review } = request.body

	pool.query(
		'UPDATE books SET title = $1, author = $2, pages_num = $3, review = $4 WHERE id = $5',
		[title, author, pages_num, review, id],
		(error, results) => {
			if (error) {
				throw error
			}
			response.status(201).json({ message: `Book modified with ID: ${id}` })
		}
	)
}

const deleteBook = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error
		}
		response.status(204).json({ message: `Books deleted with ID: ${id}` })
	})
}

module.exports = {
	getBooks,
	getBookById,
	createBook,
	updateBook,
	deleteBook
}
