import axios from 'axios'

const BASE_URL = 'http://localhost:3000/restaurants'

let getRestaurants = () => {
  return axios.get(`${BASE_URL}`)
}

export {
  getRestaurants
}
