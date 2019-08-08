import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

function Products({ data, onAddToCart }) {
  if (!data || !data.length) return null

  return (
    <React.Fragment>
      <h3>Products</h3>
      <div className='row'>
        {data.map(prod => (
          <div key={prod.id} className='col-sm-4 mb-4'>
            <Product {...prod} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

Products.propTypes = {
  data: PropTypes.array,
  onAddToCart: PropTypes.func
}

export default Products
