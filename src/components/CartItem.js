import React from 'react'
import PropTypes from 'prop-types'

function CartItem({ id, title, quantity, price, onRemoveFromCart }) {
  return (
    <div className='media mb-3'>
      <div className='mr-2'>
        <div className='rounded product-logo-small' />
      </div>
      <div className='media-body'>
        <strong className='d-block' children={title} />
        <span childre={`Quantity: ${quantity} - $${price}`} />
      </div>
      <div className='media-right align-middle'>
        <button
          type='button'
          aria-label='Remove'
          className='close'
          onClick={() => onRemoveFromCart(id)}
          children={<span aria-hidden='true' children='x' />}
        />
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemoveFromCart: PropTypes.func
}

export default CartItem
