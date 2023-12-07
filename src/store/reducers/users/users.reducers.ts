import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './users.types'
import { fetchUsersAction } from '../../actions/users.actions'
import { ReducerList } from '../../../constants/redusers'

type UsersState = {
  isLoading: boolean
  isLoaded: boolean
  error: string | null
}

export const usersAdapter = createEntityAdapter<User>()

export const usersSlice = createSlice({
  name: ReducerList.Users,
  initialState: usersAdapter.getInitialState<UsersState>({
    isLoaded: false,
    isLoading: true,
    error: null,
  }),
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchUsersAction.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUsersAction.fulfilled, (state, action: PayloadAction<User[]>) => {
        usersAdapter.upsertMany(state, action.payload)
        state.isLoading = false
        state.isLoaded = true
        state.error = null
      })
      .addCase(fetchUsersAction.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      }),
})
