import { UserId } from '../../store/reducers/users/users.types'
import { FeedbackResponseDto } from '../feedbacks/feedbacks.types'

export type UserResponseDto = {
  id: UserId
  name: string
  last_name: string
  rating: number
  last_feedback?: FeedbackResponseDto
}
