const pool = require('../config.db')

// Reviews

const getAllReviews = (request, response) => {
  pool.query('SELECT * FROM reviews', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getReviewById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM reviews WHERE review_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReviewsByIdBook = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM reviews WHERE book_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createReview = (request, response) => {
  const book_id = parseInt(request.params.book_id)
  const { review, review_author} = request.body
  console.log("oi");
  let yourDate = new Date()
  pool.query(`INSERT INTO reviews (review, review_author, book_id) VALUES ($1, $2, $3)`, [review, review_author, book_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json(results.rows);
  })
}

const updateReview = (request, response) => {
  const review_id = parseInt(request.params.review_id)
  const book_id = parseInt(request.params.book_id)
  const { review } = request.body
  pool.query(
    'UPDATE reviews SET review = $1 WHERE review_id = $2 AND book_id = $3',
    [review, review_id, book_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json({message: `Review modified with ID: ${review_id}`})
    }
  )
}

const deleteReview = (request, response) => {
  const review_id = parseInt(request.params.review_id)

  pool.query('DELETE FROM reviews WHERE review_id = $1', [review_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(204).json({message:`Review deleted with ID: ${review_id}`})
  })
}


module.exports = {

  getAllReviews,
  getReviewById,
  getReviewsByIdBook,
  createReview,
  updateReview,
  deleteReview
}  