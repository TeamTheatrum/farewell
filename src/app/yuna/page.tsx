import { histories, letters, photos } from '@/app/yuna/data'
import { LetterPage } from '@/app/components/LetterPage'

export default function Page() {
  return (
    <LetterPage
      name="Yuna"
      letters={letters}
      photos={photos}
      histories={histories}
    />
  )
}
