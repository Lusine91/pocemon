import { createSlice } from '@reduxjs/toolkit'
import { fetchPokedox } from './thunk'

const initialState = {
  loading: false,
  error: null,
  data: null,
}

const pokedex = createSlice({
  name: 'pokedex-list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokedox.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = null
      state.data = payload
    })
    builder.addCase(fetchPokedox.pending, state => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchPokedox.rejected, (state, { payload }) => {
      state.loading = true
      state.error = payload
    })
  },
})

export default pokedex.reducer
