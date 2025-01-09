import { GalleryProps } from 'react-photoswipe-gallery'

// ----------------------------------------------------------------------

export interface LightBoxProps extends GalleryProps {
  open: boolean
  images: string[]
  photoIndex: number
  setPhotoIndex: (index: number) => void
}
