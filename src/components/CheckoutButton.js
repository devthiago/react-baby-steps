import React from 'react'
import PropTypes from 'prop-types'

function CheckoutButton({ onCheckout, total, limit }) {
  const isOverLimit = total > limit
  return (
    <div className='mt-3 text-center'>
      <button
        className='btn btn-success'
        children='Checkout'
        disabled={isOverLimit}
        onClick={onCheckout}
      />
      {isOverLimit && <p>Order is over limit.</p>}
    </div>
  )
}

CheckoutButton.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.string,
  onCheckout: PropTypes.func
}

CheckoutButton.defaultProps = {
  total: 0,
  limit: 0,
  onCheckout: () => null
}

export default CheckoutButton
