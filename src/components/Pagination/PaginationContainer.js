import React from 'react'

import Pagination from './../Pagination'
import Button from './../../common/Button'

import './pagination.css'

const arrayRange = (start, stop) => Array.from({ length: stop - start + 1 }, (_, index) => start + index)

const PaginationContainer = ({ count, setPage, page, portionSize, onPrevClickCallback, onNextClickCallback }) => {
  // check if the page need to go forward 7,
  // check if the page need to go backwards the last portion
  // check the middle case when it is neither in first nor last portion
  const lefPortion =
    page <= Math.ceil(portionSize / 2)
      ? 1
      : page > count - Math.ceil(portionSize / 2)
      ? count - portionSize + 1
      : page - Math.floor(portionSize / 2)

  // the same for right portion
  const rightPortion =
    page <= Math.ceil(portionSize / 2)
      ? portionSize
      : page > count - Math.ceil(portionSize / 2)
      ? count
      : page + Math.floor(portionSize / 2)

  const finalPagination = arrayRange(lefPortion, rightPortion)

  const renderPages = finalPagination.map(element => {
    const onPageClickCallback = () => setPage(element)

    return (
      <li className={`${element === page ? 'item_active' : ''} pages-list-item`}>
        <Button key={element} className={element === page ? 'item_active' : ''} onClick={onPageClickCallback}>
          {element}
        </Button>
      </li>
    )
  })

  const isPrevDisabled = page === 1

  const isNextDisabled = page === count

  return (
    <Pagination
      renderPages={renderPages}
      isPrevDisabled={isPrevDisabled}
      isNextDisabled={isNextDisabled}
      onNextClickCallback={onNextClickCallback}
      onPrevClickCallback={onPrevClickCallback}
    />
  )
}

export default PaginationContainer
