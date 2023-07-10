import React, { useState } from 'react'
import chevron from './../../assets/chevron-down-icon.svg'
import './dropdown.css'

const Dropdown = ({ limit, setLimit }) => {
  const [isOpen, setOpen] = useState(false)

  const limitValues = [10, 20, 50]

  const onLimiterClickCallback = limit => () => {
    setLimit(limit)
  }

  return (
    <div className={`${!isOpen ? 'dropdown_closed' : ''} dropdown_wrapper`} onClick={() => setOpen(prev => !prev)}>
      <div className='dropdown_value'>
        <p>{limit}</p>
        <img
          className={`${isOpen ? 'dropdown_chevron_open' : ''} chevron`}
          src={chevron}
          width='10px'
          height='10px'
          alt='chevron dropdown'
        />
      </div>
      <div className='dropdown_menu'>
        {limitValues.map(element => (
          <div className='dropdown_item' onClick={onLimiterClickCallback(element)}>
            <p className='dropdown_item_value'>{element}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
