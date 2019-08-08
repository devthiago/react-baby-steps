export default function cartSummary(items = [], percTaxes = 0, promo = {}) {
  let { quantity, subtotal, shipping } = items.reduce((acc, cur) => {
    acc.quantity += cur.quantity
    acc.subtotal += cur.price
    if (cur.shipping > acc.shipping) acc.shipping = cur.shipping
    return acc
  }, { quantity: 0, subtotal: 0, shipping: 0 })

  subtotal = +(subtotal * (1 - promo.percSubtotal)).toFixed(2)
  shipping = promo.freeShipping ? 0 : shipping

  const taxes = +(subtotal * percTaxes).toFixed(2)
  const realTotal = taxes + shipping + subtotal
  const total = realTotal - promo.total

  const { subtotalPromo } = promo

  return {
    quantity,
    subtotal,
    subtotalPromo,
    shipping,
    taxes,
    total,
    realTotal
  }
}