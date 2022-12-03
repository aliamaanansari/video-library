import { combineReducers, configureStore } from '@reduxjs/toolkit'
import historyReducer from '../features/history/historySlice'
import movieReducer from '../features/movie/movieSlice'
import userSlice from '../features/user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    movie: movieReducer,
    user: userSlice,
    history: historyReducer,
  })
)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
