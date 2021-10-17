import axios from 'axios'

const BASE_URL = 'http://localhost:3000/users'

let signin = (params) => {
  return axios.post(`${BASE_URL}/signin`, params)
}

let signup = (params) => {
  return axios.post(`${BASE_URL}/signup`, params)
}

let getUser = (id) => {
  return axios.get(`${BASE_URL}/${id}`)
}

let createOrder = (idUser, params) => {
  return axios.post(`${BASE_URL}/${idUser}/order_detail`, params)
}

let getCurrentOrder = (idUser) => {
  return axios.get(`${BASE_URL}/${idUser}/orders`)
}

let getTotalItemsOrderDetails = (idUser) => {
  return axios.get(`${BASE_URL}/${idUser}/order_detail/total_items`)
}

let deleteOrderDetail = (idUser, idOrder, idOrderDetail) => {
  return axios.delete(`${BASE_URL}/${idUser}/orders/${idOrder}/order_detail/${idOrderDetail}`)
}

export {
  signin,
  signup,
  getUser,
  createOrder,
  getCurrentOrder,
  getTotalItemsOrderDetails,
  deleteOrderDetail
}
