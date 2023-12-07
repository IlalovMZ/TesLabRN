import { FeedbackResponseDto } from './feedbacks.types'
import { Feedback } from '../../store/reducers/feedbacks/feedbacks.types'

export const feedbackResponseMapper = (feedback: FeedbackResponseDto): Feedback => ({
  id: feedback.id,
  name: feedback.name,
  lastName: feedback.last_name,
  title: feedback.title,
  description: feedback.description,
  rating: feedback.rating,
})
