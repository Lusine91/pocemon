import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokedox } from './../../features/thunk'
import PokedexContainer from './../../components/PokedoxCard/PokedexContainer'
import PaginationContainer from './../../components/Pagination/PaginationContainer'
import PokedoxLayout from './../../layout/PokedoxLayout'
import Loader from './../../common/Loader'
import Dropdown from './../../common/Dropdown'
import './home.css'

const Home = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const dispatch = useDispatch()

  const { data } = useSelector(state => state.pokedex)

  useEffect(() => {
    dispatch(fetchPokedox({ offset: (page - 1) * limit, limit }))
  }, [page, limit, dispatch])

  const onPrevClickCallback = () => {
    setPage(prev => prev - 1)
  }

  const onNextClickCallback = () => {
    setPage(prev => prev + 1)
  }

  const renderResults = data
    ? data.results.map(element => <PokedexContainer key={element.name} apiUrl={element.url} />)
    : new Array(20).fill('').map(({ _, index }) => (
        <PokedoxLayout key={index}>
          <Loader />
        </PokedoxLayout>
      ))

  const renderPagination = data ? (
    <PaginationContainer
      onPrevClickCallback={onPrevClickCallback}
      onNextClickCallback={onNextClickCallback}
      count={Math.ceil(data.count / limit)}
      page={page}
      setPage={setPage}
      portionSize={7}
    />
  ) : null

  return (
    <main className='home_wrapper'>
      <div className='home_inner_wrapper'>
        <header className='home_header'>
          <h1 className='home_title'>Pokédex</h1>
          <div className='home_header_pagination_list_wrapper'>
            <span className='home_pagination_list_text'>show per page:</span>
            <Dropdown limit={limit} setLimit={setLimit} />
          </div>
        </header>
        <section className='home_results'>{renderResults}</section>
        <footer className='home_pagination'>{renderPagination}</footer>
      </div>
    </main>
  )
}

export default Home
