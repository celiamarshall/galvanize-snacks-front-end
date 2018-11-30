const data = require('./data')
const templates = require('./templates')

function init() {
  const queryString = window.location.search
  .slice(1)
  .split('&')
  .map(ele => ele.split('='))
  .reduce((acc, ele) => ({ ...acc, [ele[0]]: ele[1] }), {})
  
  const snackPage = document.querySelector('.one-snack')

  data.getOneSnack(queryString.id)
  .then( (response) => {
    snackPage.innerHTML = templates.showSnack(response.data.data)
  })
  .catch( (error) => {
    snackPage.innerHTML = error
  })
  
  data.getReviews(queryString.id)
  .then((response) => {
    const reviewsHTML = response.data.data.map(review => {
      return templates.showReview(review)
    })

    document.querySelector('.reviews').innerHTML = reviewsHTML.join('')
  })

  document.querySelector('.new-review').addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(queryString.id)

    const userId = localStorage.getItem('id')

    const newReview = {
      title: event.target.title.value,
      rating: parseInt(event.target.rating.value),
      text: event.target.text.value,
      user_id: parseInt(userId)
    }

    data.addReview(queryString.id, newReview)
    
  })
}

module.exports = { init }