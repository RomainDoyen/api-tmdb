type InputProps = {
  type: string;
  placeholder: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
