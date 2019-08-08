import React from 'react'
import PropTypes from 'prop-types'

function Product({ id, title, price, inventory, onAddToCart }) {
  return (
    <div className='card text-center' track-by='id'>
      <div className='card-img-top product-logo'></div>
      <div className='card-body'>
        <h5 className='card-title' children={title} />
        <p className='card-text'>
          {`$${price} - Stock: ${inventory}`}
        </p>
        <button
          type='button'
          className='btn btn-primary'
          children='Add to cart'
          disabled={inventory === 0}
          onClick={() => onAddToCart(id)}
        />
      </div>
    </div>
  )
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func
}

export default Product
