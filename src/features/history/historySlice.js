import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: [],
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action) => {
      console.log({ history: state.history, action })
      const indexOfLastWatched = state.history.findIndex(
        (item) => item.id === action.payload.id
      )
      console.log({ indexOfLastWatched })
      if (indexOfLastWatched > -1) {
        state.history.splice(indexOfLastWatched, 1)
      }
      state.history = [...state.history, action.payload]
      state.history.sort(function (a, b) {
        return (
          new Date(b.lastWatched).getTime() - new Date(a.lastWatched).getTime()
        )
      })
    },
  },
})

export const { setHistory } = historySlice.actions

export const selectHistory = (state) => state.history.history

export default historySlice.reducer
