import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

export function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<p>Likes</p>} />
        <Route path="/movie/:id" element={<p>Movie</p>} />
        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </BrowserRouter>
  )
}
