const SUBTOTAL_30_OFF = 1
const TOTAL_100_DISCOUNT = 2
const FREE_SHIPPING = 3
const LIMIT_ADD_100 = 4

export default function getPromotions(selected = []) {
  const defaultPromo = {
    limit: 0,
    freeShipping: false,
    percSubtotal: 0,
    subtotalPromo: null,
    total: 0
  }

  return selected.reduce((promo, item) => {
    if (item.id === SUBTOTAL_30_OFF) {
      promo.percSubtotal = 0.3
      promo.subtotalPromo = item.title
      return promo
    }
    if (item.id === TOTAL_100_DISCOUNT) {
      promo.total = 100
      return promo
    }
    if (item.id === FREE_SHIPPING) {
      promo.freeShipping = true
      return promo
    }
    if (item.id === LIMIT_ADD_100) {
      promo.limit = 100
      return promo
    }
    return promo
  }, defaultPromo)
}