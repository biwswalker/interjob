import 'photoswipe/dist/photoswipe.css'
import './image-swipe.css'
import Image from '@components/image/Image'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { ImageProps } from '@components/image/types'
import { isEmpty, map } from 'lodash'

export interface ImageSwipeProps {
  images: string[]
  alt: string
  width?: number | string
  height?: number | string
  imageProps?: ImageProps
}

export default function ImageSwipe({ images, alt, imageProps, width = 1024, height = 768 }: ImageSwipeProps) {
  if (isEmpty(images)) return <></>
  return (
    <Gallery>
      {map(images, (image, index) => (
        <Item original={image} height={height} width={width} key={`${image}-${index}`} cropped alt={alt}>
          {({ ref, open }) => <Image {...imageProps} onClick={open} ref={ref} src={image} alt={alt} />}
        </Item>
      ))}
    </Gallery>
  )
}
