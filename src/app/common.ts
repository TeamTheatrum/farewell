import { type StaticImageData } from 'next/image'

export interface LetterData {
  letter: string
  image?: {
    static: StaticImageData
  }
  sender: string
}

export interface PhotoData {
  static: StaticImageData
}
