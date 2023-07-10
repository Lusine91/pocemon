import React, { Fragment } from 'react'
import { orderFormat } from './../../util/orderFormat'
import notFound from './../../assets/notFound.png'
import Loader from './../../common/Loader'
import PokedoxLayout from '../../layout/PokedoxLayout'
import './pokedox.css'

const PokedoxCard = ({ pokedex }) => {
  const renderTypes =
    pokedex &&
    pokedex.types.map((element, index, array) => element.type.name + (index + 1 !== array.length ? ', ' : ''))

  return (
    <PokedoxLayout>
      {pokedex ? (
        <Fragment>
          <div className='wrapper_image_container'>
            <img className='wrapper_image_container_picture' src={pokedex.picture ?? notFound} alt={pokedex.id} />
          </div>
          <div className='description'>
            <p className='name'>{pokedex.name}</p>
            <p className='order'>#{orderFormat(pokedex.id)}</p>
            <p className='type'>{renderTypes}</p>
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </PokedoxLayout>
  )
}

export default PokedoxCard
