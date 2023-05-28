import { Review } from '@prisma/client'
import CommentItem from './CommentItem'

export function CommentList({ reviews }: { reviews: Review[] }) {
  if (reviews === undefined || reviews == null){
    return(
      <>
        <p>Error loading reviews</p>
      </>
    )
  } else {
    return (
      <>
          <p>Browse reviews:</p>
          {reviews.map(review => (
              <CommentItem key={review.id} comment={review.comments} id={review.id} forumid={review.forumId} />
              ))}
      </>
    )
  }
}

export default CommentList