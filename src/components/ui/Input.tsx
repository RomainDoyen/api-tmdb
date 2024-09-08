import { InputProps } from "../../types/ui"

export default function Input({ type, placeholder, id, onChange }: InputProps): React.JSX.Element {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  )
}
