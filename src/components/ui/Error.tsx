import { ErrorProps } from "../../types/ui"

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
