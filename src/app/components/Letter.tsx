import { Data } from '@/app/common'
import cx from 'classnames'
import Image from 'next/image'

export function Letter({
  sender,
  letter,
  image,
  hasMarginTop,
}: Data & {
  hasMarginTop?: boolean
}) {
  return (
    <div
      className={cx(
        `text-left whitespace-pre-wrap bg-white px-8 py-8 mx-4 sm:mx-0 sm:px-12 sm:py-12 border-gray-100 border-solid ${
          hasMarginTop && 'mt-32'
        }`
      )}
      key={sender}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="text-black text-lg sm:text-xl">{letter}</div>
        {image ? (
          <Image
            alt="Image in letter"
            src={image.static}
            width={320}
            className="letter-img flex-shrink-0 object-contain my-8 px-8 sm:ml-8 sm:my-0 sm:px-0 sm:w-64"
          />
        ) : null}
      </div>
      <div className="text-lg sm:text-lg text-gray-800 text-right mt-8">
        {sender}
      </div>
    </div>
  )
}
