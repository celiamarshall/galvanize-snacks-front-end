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
    <p>$${price}</p>
    <p>${description}</p>
    <hr>`
  )
}

function showReview({ id, title, rating, text }) {
  return (
  `<div class="card m-3 border">

    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p>${rating} STARS</p>
      <p>${text}</p>
    </div>

    <button data-id="${id}" type="button" class="btn btn-secondary edit-button">Edit</button>
    <button data-id="${id}" type="button" class="btn btn-secondary delete-button">Delete</button>

  </div>`
  )
}

module.exports = { snackOnHomePage, showSnack, showReview }