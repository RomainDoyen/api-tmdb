import { JSX } from "preact/jsx-runtime";

type ButtonProps = {
  id?: string;
  className: string;
  onClick: () => void;
  text: string;
  icon?: string | JSX.Element;
};

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
