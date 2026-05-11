import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { NuevoPost } from "./pages/NuevoPost"
import { Menu } from "./components/Menu"
import { Posts } from "./pages/Posts"
import { InfoPost } from "./pages/InfoPost"

export const Tema11Routing = () => {
  return (
    <div>
      <h2>Tema 11: routing</h2>
      
      <Menu />

      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/nuevo-post" element={<NuevoPost />} />
        <Route path="/posts" Component={Posts} />
        <Route path="/posts/:postId" Component={InfoPost} />

      </Routes>


    </div>
  )
}