import axios from 'axios'

const BASE_URL = 'http://localhost:3000/dishes'

let getDishes = (params) => {
  return axios.get(`${BASE_URL}?landing_page=${params}`)
}

let getDish = (params) => {
  return axios.get(`${BASE_URL}/${params}`)
}

let getDishesCategory = (idCategory) => {
  return axios.get(`${BASE_URL}/category/${idCategory}`)
}

let getDishesOffers = () => {
  return axios.get(`${BASE_URL}/offers`)
}

export {
  getDishes,
  getDish,
  getDishesCategory,
  getDishesOffers
}
