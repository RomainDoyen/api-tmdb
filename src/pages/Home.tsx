import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import { links } from '../routes/routes'

export default function Home(): React.JSX.Element {
  return (
    <div>
      <Header links={links} />
      <Footer 
        nameSite="API TMDB" 
        copyright="Tous droits réservés" 
      />
    </div>
  )
}
