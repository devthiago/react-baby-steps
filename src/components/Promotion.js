import React from 'react'
import PropTypes from 'prop-types'

function Promotion({ id, title, selected, onToggle }) {
  return (
    <label className='custom-control custom-control-inline custom-checkbox'>
      <input
        type='checkbox'
        className='custom-control-input'
        value={id}
        checked={selected}
        onChange={() => onToggle(id)}
      />
      <span className='custom-control-label' children={title} />
    </label>
  )
}

Promotion.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onToggle: PropTypes.func
}

export default Promotion
