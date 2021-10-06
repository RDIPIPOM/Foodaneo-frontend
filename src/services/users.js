import axios from 'axios'

const BASE_URL = 'http://localhost:3000/users'

let signin = () => {
  return axios.get(`${BASE_URL}/signin`)
}

let signup = () => {
  return axios.post(`${BASE_URL}/signup`)
}

export {
  signin,
  signup
}
