function init() {
  const signUpForm = document.querySelector('.signup')

  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    window.location = '/snacks/login.html'
  })
}

module.exports = { init }