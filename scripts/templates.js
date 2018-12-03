function snackOnHomePage({ id, img, name }) {
  return (
    `<div class="card m-3 border" style="max-width: 25%;">
    <a href="./snack.html?id=${id}">
      <img class="card-img-top" src="${img}" alt="${name}" style="width: 100%">
    </a
    <br>
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
    </div>
  </div>`
  )
}

function showSnack({ name, img, price, description }) {
  return (
    `<h2>${name}</h2>
    <img src="${img}" alt="${name}">
    <h4 class="avRating"></h4>
    <p>$${price}</p>
    <p>${description}</p>`
  )
}

function showReview({ id, title, rating, text }) {
  return (
    `<div class="card snack-review-card">
  <div class="card-header">
    ${title}
  </div>
  <div class="card-body">
    <p class="card-text">Rating: ${rating}</p>
    <p class="card-text">${text}</p>
    <button data-id="${id}" type="button" class="btn btn-secondary edit-button">Edit</button>
    <button data-id="${id}" type="button" class="btn btn-secondary delete-button">Delete</button>
  </div>
</div>`
  )
}

module.exports = { snackOnHomePage, showSnack, showReview }