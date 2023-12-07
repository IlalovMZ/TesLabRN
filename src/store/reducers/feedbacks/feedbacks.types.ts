import { Brand } from '../../../types'

export type FeedbackId = Brand<number, 'feedback_id'>

export type Feedback = {
  id: FeedbackId
  name: string
  lastName: string
  title: string
  description: string
  rating: number
}
