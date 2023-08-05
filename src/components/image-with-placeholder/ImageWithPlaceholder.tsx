import { useState } from "react"

type Props = {
  actualSrc: string
  placeholderSrc: string
  alt: string
  styles?: React.CSSProperties
}

const ImageWithPlaceholder: React.FC<Props> = ({
  actualSrc,
  placeholderSrc,
  alt,
  styles
}) => {

  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoaded = () => {
    setIsLoading(false)
  }

  return (
    <img
      style={{
        ...styles
      }}
      src={isLoading ? placeholderSrc : actualSrc}
      alt={alt}
      onLoad={handleImageLoaded}/>
  )
}

export default ImageWithPlaceholder