type ErrorProps = {
  title: string;
  text: string;
}

export default function Error({ title, text }: ErrorProps): React.JSX.Element {
  return (
    <footer>
      <div className="form-component">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </footer>
  )
}
