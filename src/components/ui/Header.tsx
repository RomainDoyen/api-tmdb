import { NavLink } from 'react-router-dom';
import { HeaderProps } from '../../types/ui';

export default function Header({ links }: HeaderProps): React.JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} className={link.className}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
