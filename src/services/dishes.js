import axios from 'axios'

const BASE_URL = 'http://localhost:3000/dishes'

let getDishes = () => {
  return axios.get(`${BASE_URL}`)
}

let getDishesCategory = (idCategory) => {
  return axios.get(`${BASE_URL}/category/${idCategory}`)
}

let getDishesOffers = () => {
  return axios.get(`${BASE_URL}/offers`)
}

export {
  getDishes,
  getDishesCategory,
  getDishesOffers
}
