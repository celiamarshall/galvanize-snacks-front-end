(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function init() {
  
}

module.exports = { init }
},{}],2:[function(require,module,exports){
function init() {

}

module.exports = { init }
},{}],3:[function(require,module,exports){
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
},{"./home":1,"./login":2,"./signup":4,"./snack":5}],4:[function(require,module,exports){
function init() {
  const signUpForm = document.querySelector('.signup')

  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    window.location = '/snacks/login.html'
  })
}

module.exports = { init }
},{}],5:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2hvbWUuanMiLCJzY3JpcHRzL2xvZ2luLmpzIiwic2NyaXB0cy9tYWluLmpzIiwic2NyaXB0cy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBpbml0KCkge1xuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGluaXQgfSIsImZ1bmN0aW9uIGluaXQoKSB7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGluaXQgfSIsImNvbnN0IHNpZ251cCA9IHJlcXVpcmUoJy4vc2lnbnVwJylcbmNvbnN0IGxvZ2luID0gcmVxdWlyZSgnLi9sb2dpbicpXG5jb25zdCBob21lID0gcmVxdWlyZSgnLi9ob21lJylcbmNvbnN0IHNuYWNrID0gcmVxdWlyZSgnLi9zbmFjaycpXG5cbmNvbnN0IHBhZ2VzID0ge1xuICAnLyc6IHNpZ251cC5pbml0LFxuICAnL3NuYWNrcy9sb2dpbic6IGxvZ2luLmluaXQsXG4gICcvc25hY2tzL2hvbWUnOiBob21lLmluaXQsXG4gICdzbmFja3Mvc25hY2snOiBzbmFjay5pbml0XG59XG5cbmNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcblxuZm9yIChwYWdlIGluIHBhZ2VzKSB7XG4gIGlmIChwYXRoID09PSBwYWdlKSB7XG4gICAgcGFnZXNbcGFnZV0oKVxuICB9XG59IiwiZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3Qgc2lnblVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWdudXAnKVxuXG4gIHNpZ25VcEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvc25hY2tzL2xvZ2luLmh0bWwnXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBpbml0IH0iXX0=
