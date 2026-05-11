import { Link } from "react-router"

export const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          {/* <a href="/nuevo-post">Nuevo post</a> */}
          <Link to="/nuevo-post">Nuevo post</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  )
}
