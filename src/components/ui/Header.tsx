import { NavLink } from 'react-router-dom';

type HeaderProps = {
  to: string;
  className: string | ((nav: { isActive: boolean }) => string);
  text: string;
}

export default function Header({ to, className, text }: HeaderProps): React.JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={to} className={className}>{text}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
