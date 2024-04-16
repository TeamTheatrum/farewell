import { Data } from '@/app/common'
import { Letter } from '@/app/components/Letter'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center self-center max-w-screen-md">
      {children}
    </div>
  )
}

export function LetterPage({ name, data }: { name: string; data: Data[] }) {
  return (
    <div className="text-white text-center text-6xl mt-32">
      <div className="text-theme-pink mx-8">Farewell Letters</div>
      <div className="text-theme-pink text-4xl mt-2">To. {name}</div>

      <div className="mt-32 flex flex-col">
        {data.map((letter, idx) => {
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
    </div>
  )
}
