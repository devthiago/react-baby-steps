import React from 'react'
import PropTypes from 'prop-types'

function Summary(props) {
  let {
    quantity,
    subtotal,
    subtotalPromo,
    shipping,
    taxes,
    total,
    realTotal
  } = props

  let qtyLabel = quantity === 1 ? 'item' : 'items'
  qtyLabel = `${quantity} ${qtyLabel}`

  if (quantity > 0 && shipping === 0) {
    shipping = <em children='Free shipping' />
  } else {
    shipping = <span children={`$${shipping}`} />
  }

  const hasDiscount = total < realTotal

  return (
    <ul className='list-group'>
      <li className='list-group-item'>
        {`Subtotal (${qtyLabel}): $${subtotal}`}
        {subtotalPromo && <em><strong children={`(${subtotalPromo})`} /></em>}
      </li>
      <li className='list-group-item'>
        {`Shipping: `}
        {shipping}
      </li>
      <li className='list-group-item'>
        {`Taxes: $${taxes}`}
      </li>
      <li className='list-group-item'>
        <strong children='Total:' />
        {hasDiscount && <strike children={` $${realTotal}`} />}
        {<strong children={` $${total}`} />}
      </li>
    </ul>
  )
}

Summary.propTypes = {
  quantity: PropTypes.number,
  subtotal: PropTypes.number,
  subtotalPromo: PropTypes.string,
  shipping: PropTypes.number,
  taxes: PropTypes.number,
  total: PropTypes.number,
  realTotal: PropTypes.number
}

Summary.defaultProps = {
  quantity: 0,
  subtotal: 0,
  subtotalPromo: null,
  shipping: 0,
  taxes: 0,
  total: 0,
  realTotal: 0
}

export default Summary
