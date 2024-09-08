import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Movie from '../components/feature/Movie'
import { links } from '../routes/routes'

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header links={links} />
      <Movie />
      <Footer 
        nameSite="API TMDB" 
        copyright="Tous droits réservés" 
      />
    </>
  )
}
