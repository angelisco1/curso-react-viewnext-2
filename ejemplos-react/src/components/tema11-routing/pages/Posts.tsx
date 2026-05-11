import { useEffect, useState } from "react"
import { PostsService } from "../services/posts.service"
import { Link } from "react-router"

export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    PostsService.getPosts(page)
      .then((data: any) => {
        setPosts(data)
      })
  }, [page])

  
  const listaPosts = posts.map((post: any) => {
    return (<li key={post.id}>
      {post.title}
      <Link to={'/posts/' + post.id}>Ver post</Link>
    </li>)
  })
  
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {listaPosts}
      </ul>

      {/* Habría que controlar que no bajamos de la página 1 y que no nos pasamos de la 10 */}
      <button onClick={() => setPage(page-1)}>Prev</button>
      <button onClick={() => setPage(page+1)}>Next</button>
      
    </div>
  )
}