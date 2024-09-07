type FooterProps = {
  nameSite: string;
  copyright: string;
}

export default function Footer({ nameSite, copyright }: FooterProps): React.JSX.Element {

  const getCurrentYear = () => new Date().getFullYear()

  return (
    <footer>
      <p>© {getCurrentYear()} - {nameSite} - {copyright}</p>
    </footer>
  )
}