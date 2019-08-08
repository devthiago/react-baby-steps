import React from 'react'
import PropTypes from 'prop-types'
import getPromotions from '../lib/getPromotions'
import cartSummary from '../lib/cartSummary'
import CartItem from './CartItem'
import Summary from './Summary'
import CheckoutButton from './CheckoutButton'

function Cart({ items, onRemoveFromCart, onCheckout, promotions, profile }) {
  const promo = getPromotions(promotions)
  const summary = cartSummary(items, .2, promo)

  return (
    <React.Fragment>
      <h3>Cart</h3>
      {items.map(item => (
        <CartItem key={item.id} {...item} onRemoveFromCart={onRemoveFromCart} />
      ))}
      <Summary {...summary} />
      <CheckoutButton
        total={summary.total}
        limit={profile.limit + promo.limit}
        onCheckout={onCheckout}
      />
    </React.Fragment>
  )
}

Cart.propTypes = {
  items: PropTypes.array,
  onRemoveFromCart: PropTypes.func,
  onCheckout: PropTypes.func,
  promotions: PropTypes.array,
  profile: PropTypes.object
}

Cart.defaultProps = {
  items: [],
  promotions: [],
  profile: {}
}

export default Cart
