const axios = require('axios')
const BASE_URL = 'localhost:3000/api/'

function getHeaders() {
  const token = localStorage.getItem('token')

  if (token) {
    const tokenWithScheme = `Bearer ${token}`

    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': tokenWithScheme
      }
    }
  }
}

function signup() {
  return axios.post(BASE_URL + 'users')
}

function login() {
  return axios.post(BASE_URL + 'login')
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
  getSnacks,
  getOneSnack,
  getReviews,
  getOneReview,
  addReview,
  editReview,
  deleteReview
}