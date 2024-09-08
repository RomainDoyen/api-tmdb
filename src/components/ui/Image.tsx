type ImageProps = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }: ImageProps): React.JSX.Element {
  return (
    <img 
      src={src} 
      alt={alt} 
    />
  )
}
