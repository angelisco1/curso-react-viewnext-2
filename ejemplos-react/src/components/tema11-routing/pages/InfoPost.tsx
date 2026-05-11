import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { PostsService } from "../services/posts.service"

export const InfoPost = () => {
  const [post, setPost] = useState<any>(null)
  const params = useParams()

  useEffect(() => {
    PostsService.getPost(params.postId!)
      .then((data: any) => {
        setPost(data)
      })
  }, [])

  
  return (
    <div>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}