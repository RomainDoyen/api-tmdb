import { BrowserRouter, Route, Routes } from "react-router-dom"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/likes" element={<p>Likes</p>} />
        <Route path="/movie/:id" element={<p>Movie</p>} />
        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </BrowserRouter>
  )
}
