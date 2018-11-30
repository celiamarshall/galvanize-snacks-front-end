const signup = require('./signup')
const login = require('./login')
const home = require('./home')
const snack = require('./snack')

const pages = {
  '/': signup.init,
  '/snacks/login.html': login.init,
  '/snacks/home.html': home.init,
  '/snacks/snack.html': snack.init
}

const path = window.location.pathname

for (page in pages) {
  if (path === page) {
    pages[page]()
  }
}