const data = require('./data')
const templates = require('./templates')

const snackPage = document.querySelector('.one-snack')
const errorMessage = document.querySelector('.error')

function init() {

  //delete token if user logs out
  document.querySelector('.logout').addEventListener('click', (event) => {
    localStorage.removeItem('token')
  })

  //get the snack id from the query parameters
  const queryString = window.location.search
    .slice(1)
    .split('&')
    .map(ele => ele.split('='))
    .reduce((acc, ele) => ({ ...acc, [ele[0]]: ele[1] }), {})

  //format the snack data
  data.getOneSnack(queryString.id)
    .then((response) => {
      snackPage.innerHTML = templates.showSnack(response.data.data)
    })
    .catch((error) => {
      errorMessage.classList.remove('hidden')
      errorMessage.innerHTML = error
    })

  const users = []

  //format the reviews data and calculate the average rating
  data.getReviews(queryString.id)
    .then((response) => {
      let allRatings = 0
      let count = 0
      let averageRating
      const reviewsHTML = response.data.data.map(review => {
        count++
        allRatings += parseInt(review.rating)
        averageRating = allRatings / count
        users.push(review.user_id)
        return templates.showReview(review)
      })

      document.querySelector('.reviews').innerHTML = reviewsHTML.join('')
      if (averageRating) {
        document.querySelector('.avRating').textContent = `Average Rating: ${averageRating}`
      }
      addDeleteListeners(queryString.id)
      addEditListeners(queryString.id)
    })

  //checking if you have reviewed
  document.querySelector('.review-snack').addEventListener('click', (event) => {
    data.getUserId()
      .then(response => {
        const userId = response.data.id
        if (users.includes(userId)) {
          $('#myModal').modal('hide')
          throw { message: 'You have already reviewed this snack' }
        }
      })
      .catch(error => {
        errorMessage.classList.remove('hidden')
        errorMessage.innerHTML = error.message
      })
  })

  //setting a new review
  document.querySelector('.new-review').addEventListener('submit', (event) => {
    event.preventDefault()

    data.getUserId()
      .then(response => {
        const userId = response.data.id

        const newReview = {
          title: event.target.title.value,
          rating: parseInt(event.target.rating.value),
          text: event.target.text.value,
          user_id: userId
        }

        return data.addReview(queryString.id, newReview)
      })
      .then(() => {
        $('#myModal').modal('hide')
      })
      .catch(error => {
        errorMessage.classList.remove('hidden')
        errorMessage.innerHTML = error.message
      })
    location.reload()
  })
}

//deleting a review
function addDeleteListeners(snackId) {
  const deleteButtons = document.querySelectorAll('.delete-button')

  for (button of deleteButtons) {
    button.addEventListener('click', (event) => {

      const reviewId = event.target.getAttribute('data-id')

      let userId
      let userOnReviewId

      data.getUserId()
        .then(response => {
          userId = response.data.id

          return data.getOneReview(snackId, reviewId)
        })
        .then(response => {
          userOnReviewId = response.data.data.user_id

          if (userId !== userOnReviewId) throw { message: "Cannot delete others' reviews" }

          return data.deleteReview(snackId, reviewId)
        })
        .then(() => {
          location.reload()
        })
        .catch(error => {
          errorMessage.classList.remove('hidden')
          errorMessage.innerHTML = error.message
        })

    })
  }
}

//editing a review
function addEditListeners(snackId) {
  const editButtons = document.querySelectorAll('.edit-button')

  for (button of editButtons) {
    button.addEventListener('click', (event) => {

      const reviewId = event.target.getAttribute('data-id')

      let userId
      let userOnReviewId

      data.getUserId()
        .then(response => {
          userId = response.data.id

          return data.getOneReview(snackId, reviewId)
        })
        .then((response) => {
          userOnReviewId = response.data.data.user_id

          if (userId !== userOnReviewId) throw { message: "Cannot edit others' reviews" }

          $('#editModal').modal('show')

          document.querySelector('#editTitle').value = response.data.data.title
          document.querySelector('#editRating').value = response.data.data.rating
          document.querySelector('#editText').value = response.data.data.text

          document.querySelector('.edit-review').addEventListener('submit', (event) => {
            event.preventDefault()

            const updatedReview = {
              title: event.target.editTitle.value,
              rating: parseInt(event.target.editRating.value),
              text: event.target.editText.value
            }

            data.editReview(snackId, reviewId, updatedReview)
              .then(() => {
                $('#editModal').modal('hide')
                location.reload()
              })
          })
        })
        .catch(error => {
          errorMessage.classList.remove('hidden')
          errorMessage.innerHTML = error.message
        })
    })
  }
}

module.exports = { init }