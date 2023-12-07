import { UserResponseDto } from './users.types'
import { User } from '../../store/reducers/users/users.types'
import { feedbackResponseMapper } from '../feedbacks/feedbacks.mappers'

export const userResponseMapper = (user: UserResponseDto): User => ({
  id: user.id,
  name: user.name,
  lastName: user.last_name,
  avatar: user.avatar,
  rating: user.rating,
  lastFeedback: user.last_feedback && feedbackResponseMapper(user.last_feedback),
})
