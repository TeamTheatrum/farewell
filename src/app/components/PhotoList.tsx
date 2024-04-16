import { type PhotoData } from '@/app/common'
import Image from 'next/image'

interface Props {
  photos: PhotoData[]
}

export function PhotoList({ photos }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {photos.map((photo, index) => (
        <a key={index} href={photo.static.src} target="_blank">
          <Image
            src={photo.static}
            alt={`photo-${index}`}
            sizes="(max-width: 768px) 50vw, 25vw"
            className="h-96 object-cover"
          />
        </a>
      ))}
    </div>
  )
}
