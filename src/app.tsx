import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./components/ui/Error"

export function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<p>Likes</p>} />
        <Route path="/movie/:id" element={<p>Movie</p>} />
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
