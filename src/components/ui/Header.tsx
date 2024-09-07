import { NavLink } from 'react-router-dom';

type LinkItem = {
  to: string;
  className: string | ((nav: { isActive: boolean }) => string);
  text: string;
}

type HeaderProps = {
  links: LinkItem[];
}

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
