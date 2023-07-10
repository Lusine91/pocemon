import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from './../api/axios'

export const fetchPokedox = createAsyncThunk(
  'pokedex-list/fetchPokedex',
  async ({ offset, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/', {
        params: {
          offset,
          limit,
        },
      })

      return { results: data.results, count: data.count }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchEachPokedox = async apiUrl => {
  try {
    const { data } = await axios.get(apiUrl)

    return {
      id: data.id,
      types: data.types,
      name: data.name,
      picture: data.sprites.other['official-artwork'].front_default,
    }
  } catch (error) {
    return error
  }
}
