import { HistoryData, type LetterData, type PhotoData } from '@/app/common'
import { HistoryList } from '@/app/components/HistoryList'
import { Letter } from '@/app/components/Letter'
import { PhotoList } from '@/app/components/PhotoList'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center self-center max-w-screen-md">
      {children}
    </div>
  )
}

export function LetterPage({
  name,
  letters,
  photos,
  histories,
}: {
  name: string
  letters: LetterData[]
  photos: PhotoData[]
  histories: HistoryData[]
}) {
  return (
    <div className="text-white text-center mt-32">
      <div className="text-theme-pink mx-8 text-6xl">Farewell Letters</div>
      <div className="text-theme-pink text-4xl mt-2">To. {name}</div>

      <div className="text-theme-pink mx-8 pt-48 pb-24 text-4xl">
        Contributions
      </div>
      <HistoryList histories={histories} />

      <div className="mt-32 flex flex-col">
        {letters.map((letter, idx) => {
          return (
            <Row key={idx}>
              <Letter
                key={idx}
                image={letter.image}
                hasMarginTop={idx !== 0}
                letter={letter.letter}
                sender={letter.sender}
              />
            </Row>
          )
        })}
      </div>

      <div className="text-theme-pink mx-8 pt-48 pb-24 text-4xl">
        Our Memories
      </div>
      <PhotoList photos={photos} />

      <div className="text-black text-lg pt-24 pb-24 text-center px-16 whitespace-pre-wrap">
        {`그동안의 노고에 깊은 감사의 말씀을 드리며,
앞으로 더욱 행복한 일만 가득하시길 바랍니다.
Farewell!`}
      </div>
    </div>
  )
}
