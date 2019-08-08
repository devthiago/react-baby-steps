import React from 'react'
import PropTypes from 'prop-types'
import Promotion from './Promotion'

function Promotions({ data, selected, onToggle }) {
  if (!data || !data.length) return null

  return (
    <React.Fragment>
      <h3>Promotions</h3>
      {data.map(promo => {
        const isSelected = !!selected.find(p => p.id === promo.id)
        return (
          <Promotion
            {...promo}
            selected={isSelected}
            onToggle={onToggle}
          />
        )
      })}
    </React.Fragment>
  )
}

Promotions.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.array,
  onToggle: PropTypes.func
}

export default Promotions
