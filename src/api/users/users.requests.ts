import { User } from '../../store/reducers/users/users.types'
import { ApiUrls, appAxiosInstance } from '../API'
import { UserResponseDto } from './users.types'
import { userResponseMapper } from './users.mappers'

export const fetchUsersApi = (): Promise<User[]> =>
  appAxiosInstance
    .get<UserResponseDto[]>(ApiUrls.users)
    .then(res => res.data.map(userResponseMapper))
