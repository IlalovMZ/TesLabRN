import { FeedbackId } from '../../store/reducers/feedbacks/feedbacks.types'

export type FeedbackResponseDto = {
  id: FeedbackId
  name: string
  last_name: string
  title: string
  description: string
  rating: number
}
