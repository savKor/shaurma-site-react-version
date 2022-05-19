import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/storageSlice'

export const store = configureStore({
  reducer: {
    storage: counterReducer,
  },
})
