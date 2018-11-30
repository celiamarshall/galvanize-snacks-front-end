const data = require('./data')

function init() {
  const loginForm = document.querySelector('.login')

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userLogin = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    data.login(userLogin)
    .then ( (response) => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('id', response.data.id)
      window.location = '/snacks/home.html'
    })
    .catch( error => {
      loginForm.innerHTML = error
    })
    
  })
}

module.exports = { init }