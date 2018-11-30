const data = require('./data')

function init() {
  const signUpForm = document.querySelector('.signup')

  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userInfo = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }

    data.signup(userInfo)
    
    window.location = '/snacks/login.html'
  })
}

module.exports = { init }