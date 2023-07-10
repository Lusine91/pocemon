import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import pokedex from '../features/pokedexList'

const reducer = combineReducers({
  pokedex,
})

const store = configureStore({
  reducer,
})

export default store
