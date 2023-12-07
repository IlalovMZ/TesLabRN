import { Brand } from '../../../types'
import { Feedback } from '../feedbacks/feedbacks.types'

export type UserId = Brand<number, 'user_id'>

export type User = {
  id: UserId
  name: string
  lastName: string
  rating: number
  lastFeedback?: Feedback
}
