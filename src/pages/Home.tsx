import Header from '../components/ui/Header'

export default function Home(): React.JSX.Element {
  return (
    <div>
      <Header 
        to="/" 
        className={nav => nav.isActive ? "nav-active" : ""} 
        text="Accueil" 
      />
      <Header 
        to="/likes" 
        className={nav => nav.isActive ? "nav-active" : ""} 
        text="Coup de coeur" 
      />
    </div>
  )
}
