import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./components/ui/Error"
import MovieDetail from "./pages/MovieDetail"

export function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<p>Likes</p>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={
          <Error 
            title="Erreur 404" 
            text="La page que vous recherchez n'existe pas" 
          />
        } />
      </Routes>
    </BrowserRouter>
  )
}
