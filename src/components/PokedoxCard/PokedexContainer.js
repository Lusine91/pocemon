import React, { useEffect, useState } from 'react'
import { fetchEachPokedox } from './../../features/thunk'
import PokedoxCard from './'

const PokedexContainer = ({ apiUrl }) => {
  const [pokedex, setPokedex] = useState()

  const fetchPokedex = async () => {
    const response = await fetchEachPokedox(apiUrl)

    setPokedex(response)
  }

  useEffect(() => {
    fetchPokedex()
  }, [apiUrl])

  return <PokedoxCard pokedex={pokedex} />
}

export default PokedexContainer
