import axios from 'axios'

const BASE_URL = 'http://localhost:3000/catalogs'

let getCategories = () => {
  return axios.get(`${BASE_URL}/category`)
}

export {
  getCategories
}
