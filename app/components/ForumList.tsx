import { Forum } from '@prisma/client'
import ForumListItem from './ForumListItem'

export function ForumList({ forums }: { forums: Forum[] }) {
  if (forums === undefined || forums == null){
    return(
      <>
        <p>Error loading forums</p>
      </>
    )
  } else {
    return (
      <>
          <p>Browse forums:</p>
          {forums.map(forum => (
              <ForumListItem key={forum.id} title={forum.title} forumid={forum.id} />
              ))}
      </>
    )
  }
  
}