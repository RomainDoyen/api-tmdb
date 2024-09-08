import { ImageProps } from "../../types/ui"

export default function Image({ src, alt }: ImageProps): React.JSX.Element {
  return (
    <img 
      src={src} 
      alt={alt} 
    />
  )
}
