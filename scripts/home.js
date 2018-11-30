const data = require('./data')
const templates = require('./templates')

function init() {
  data.getSnacks()
  .then((response) => {
    const snackHTML = response.data.map(snack => {
      return templates.snackOnHomePage(snack)
    })

    document.querySelector('.snacks').innerHTML = snackHTML.join('')
  })
}


module.exports = { init }