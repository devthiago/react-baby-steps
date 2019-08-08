import React from 'react'
import PropTypes from 'prop-types'
import getPromotions from '../lib/getPromotions'

function Header({ firstName, lastName, limit, promotions = [] }) {
  const promo = getPromotions(promotions)
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <a href='/' className='navbar-brand'>Shop</a>
        <span className='navbar-text float-right'>
          Hello <strong children={`${firstName} ${lastName}`} />, 
          your credit limit is <strong children={`$${limit + promo.limit}`} />
        </span>
      </div>
    </nav>
  )
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired
}

export default Header
