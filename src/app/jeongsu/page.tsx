import { histories, letters, photos } from '@/app/jeongsu/data'
import { LetterPage } from '@/app/components/LetterPage'

export default function Page() {
  return (
    <LetterPage
      name="Jeongsu"
      letters={letters}
      photos={photos}
      histories={histories}
    />
  )
}
