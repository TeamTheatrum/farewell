import { type StaticImageData } from 'next/image'

export interface Data {
  letter: string
  image?: {
    static: StaticImageData
  }
  sender: string
}
