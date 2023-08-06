import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Profile } from "./pages/profile/profile"
import { Profilechange } from "./pages/profile/profilechange"
import { ProtectRoute } from "./components/protect-route"
function App() {
  

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<ProtectRoute/>}>
        <Route index element={<Profile/>}/>
        <Route path="change" element={<Profilechange/>}/>
      </Route>
      <Route path="*" element={<h1>Page not Found</h1>}/>
    </Routes>
   </>
  )
}

export default App
