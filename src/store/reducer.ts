import { combineReducers } from '@reduxjs/toolkit'
import { usersSlice } from './reducers/users/users.reducers'

export const Reducer = combineReducers({
  users: usersSlice.reducer,
})
