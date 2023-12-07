import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsersApi } from '../../api/users/users.requests'

export const fetchUsersAction = createAsyncThunk('fetch/users', fetchUsersApi)
