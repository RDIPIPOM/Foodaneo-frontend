import axios from 'axios'

const BASE_URL = 'http://localhost:3000/users'

let signin = (params) => {
  return axios.post(`${BASE_URL}/signin`, params)
}

let signup = (params) => {
  return axios.post(`${BASE_URL}/signup`, params)
}

export {
  signin,
  signup
}
