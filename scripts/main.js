const signup = require('./signup')
const login = require('./login')
const home = require('./home')
const snack = require('./snack')

const pages = {
  '/': signup.init,
  '/snacks/login': login.init,
  '/snacks/home': home.init,
  'snacks/snack': snack.init
}

const path = window.location.pathname

for (page in pages) {
  if (path === page) {
    pages[page]()
  }
}