import React, { FC, ImgHTMLAttributes } from 'react'
import { ImageContent } from './image'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  // image: string
}
export const ImageContainer: FC<ImageProps> = ({ src, ...rest }) => {
  return (
    <ImageContent src={src} {...rest} />
  )
}
