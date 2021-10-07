import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'

export default configureStore({
  reducer: combineReducers({
    auth: authReducer
  })
})
