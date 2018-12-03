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

  document.querySelector('.logout').addEventListener('click', (event) => {
    localStorage.removeItem('token')
  })
}


module.exports = { init }