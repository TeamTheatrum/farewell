import { Data } from '@/app/common'
import { Letter } from '@/app/components/Letter'

export function LetterPage({ name, data }: { name: string; data: Data[] }) {
  return (
    <div className="text-white text-center text-6xl mt-16">
      <div className="text-theme-orange">Farewell Letters</div>
      <div className="text-white text-4xl">To. {name}</div>

      <div className="mt-16">
        {data.map((letter, idx) => {
          return (
            <Letter
              key={idx}
              hasMarginTop={idx !== 0}
              letter={letter.letter}
              sender={letter.sender}
            />
          )
        })}
      </div>
    </div>
  )
}
