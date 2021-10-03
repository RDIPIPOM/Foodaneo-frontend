import axios from 'axios'

const BASE_URL = 'http://localhost:3000/dishes'

let getDishesLandingPage = () => {
  return axios.get(`${BASE_URL}?landing_page=1`)
}

let getDishes = () => {
  return axios.get(`${BASE_URL}?landing_page=0`)
}

export {
  getDishesLandingPage,
  getDishes
}
