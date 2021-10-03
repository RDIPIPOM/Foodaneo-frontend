import axios from 'axios'

const BASE_URL = 'http://localhost:3000/dishes'

let getDishes = () => {
  return axios.get(`${BASE_URL}?landing_page=1`)
}

export {
  getDishes
}
