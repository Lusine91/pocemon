import React from 'react'

import Button from './../../common/Button'
import './pagination.css'

const Pagination = ({ onPrevClickCallback, onNextClickCallback, isNextDisabled, isPrevDisabled, renderPages }) => (
  <ul className='wrapper_pagination'>
    <li className='pages-list-item'>
      <Button className='pages-list-item-move' onClick={onPrevClickCallback} disabled={isPrevDisabled}>
        Prev
      </Button>
    </li>
    <ul className='pages-list'>{renderPages}</ul>
    <li className='pages-list-item'>
      <Button className='pages-list-item-move' onClick={onNextClickCallback} disabled={isNextDisabled}>
        Next
      </Button>
    </li>
  </ul>
)

export default Pagination
