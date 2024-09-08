type ImageProps = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }): React.JSX.Element {
  return (
    <img 
      src={src} 
      alt={alt} 
    />
  )
}
