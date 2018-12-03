const axios = require('axios')
const BASE_URL = 'https://mysterious-ridge-20284.herokuapp.com/api/'

function getHeaders() {
  const token = localStorage.getItem('token')

  if (token) {
    const tokenWithScheme = `Bearer ${token}`

    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': tokenWithScheme
      }
    }
  }
}

function signup(userInfo) {
  return axios.post(BASE_URL + 'users', userInfo)
}

function login(userLogin) {
  return axios.post(BASE_URL + 'login', userLogin)
}

function getUserId() {
  return axios.get(BASE_URL + 'login', getHeaders())
}

function getSnacks() {
  return axios.get(BASE_URL + 'snacks', getHeaders())
}

function getOneSnack(snackId) {
  return axios.get(`${BASE_URL}snacks/${snackId}`, getHeaders())
}

function getReviews(snackId) {
  return axios.get(`${BASE_URL}snacks/${snackId}/reviews`, getHeaders())
}

function getOneReview(snackId, reviewId) {
  return axios.get(`${BASE_URL}snacks/${snackId}/reviews/${reviewId}}`, getHeaders())
}

function addReview(snackId, newReview) {
  return axios.post(`${BASE_URL}snacks/${snackId}/reviews`, newReview, getHeaders())
}

function editReview(snackId, reviewId, newReview) {
  return axios.put(`${BASE_URL}snacks/${snackId}/reviews/${reviewId}}`, newReview, getHeaders())
}

function deleteReview(snackId, reviewId) {
  return axios.delete(`${BASE_URL}snacks/${snackId}/reviews/${reviewId}}`, getHeaders())
}

module.exports = {
  signup,
  login,
  getUserId,
  getSnacks,
  getOneSnack,
  getReviews,
  getOneReview,
  addReview,
  editReview,
  deleteReview
}