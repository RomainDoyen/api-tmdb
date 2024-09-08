import { ButtonProps } from "../../types/ui"

export default function Button({ id, className, onClick, text, icon }: ButtonProps): React.JSX.Element {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      >
      {text} <span role='img' aria-label='arrow'>
        {icon}
      </span>
    </button>
  )
}
