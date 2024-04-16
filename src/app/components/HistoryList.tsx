import classnames from 'classnames'
import { type HistoryData } from '@/app/common'
import Image from 'next/image'

export function HistoryList({ histories }: { histories: HistoryData[] }) {
  return (
    <div className="flex flex-col items-center">
      {histories.map((history, index) => {
        return (
          <div
            key={history.name}
            className={classnames(
              `flex justify-between flex-col sm:flex-row-reverse sm:max-w-screen-md w-full sm:mx-0 mx-4`,
              index !== 0 && 'mt-16'
            )}
          >
            <Image
              src={history.image}
              alt={history.name}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="sm:rounded-lg h-80 sm:h-96 sm:w-96 object-cover w-full"
            />
            <div className="flex flex-col items-start ml-4 sm:ml-0">
              <div className="text-2xl sm:text-3xl mt-4 sm:mt-0 text-left text-black">
                {history.name}
              </div>
              <div className="text-lg text-left mt-2 text-black">{`${history.year}년 ${history.month}월`}</div>
            </div>
          </div>
        )
      })}
      <div className="text-black text-2xl text-center mt-16">
        ... and countless efforts!
      </div>
    </div>
  )
}
