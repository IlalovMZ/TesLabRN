import { usersAdapter } from '../reducers/users/users.reducers'
import { State } from '../store'
import { EntityState } from '@reduxjs/toolkit'
import { User, UserId } from '../reducers/users/users.types'

export const usersSelector = usersAdapter.getSelectors(
  (state: State): EntityState<User> => state.users,
)

export const selectUsers = (state: State): User[] => usersSelector.selectAll(state)

export const selectIsLoading = (state: State): boolean => state.users.isLoading

export const selectPaginationUsers = (limit: number, offset: number) => (state: State) =>
  selectUsers(state).slice(0, limit + offset)

export const selectIsLoaded = (state: State): boolean => state.users.isLoaded

export const selectUserById =
  (userId: UserId) =>
  (state: State): User | undefined =>
    selectUsers(state).find(user => user.id === userId)
