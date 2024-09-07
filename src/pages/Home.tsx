import Header from '../components/ui/Header'
import { links } from '../routes/routes'

export default function Home(): React.JSX.Element {
  return (
    <div>
      <Header links={links} />
    </div>
  )
}
