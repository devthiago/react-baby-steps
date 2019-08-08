const HOST = 'localhost'
const PORT = 5000
const API = `http://${HOST}:${PORT}/api`

export function request(route = '') {
  return fetch(`${API}/${route}`).then(resp => resp.json())
}

export function getPromotions() {
  return request('promotions')
}

export function getProducts() {
  return request('products')
}

export function getProfile() {
  return request('profile')
}