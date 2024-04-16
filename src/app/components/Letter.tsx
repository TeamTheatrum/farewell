import cx from 'classnames'

export function Letter({
  sender,
  letter,
  hasMarginTop,
}: {
  sender: string
  letter: string
  hasMarginTop?: boolean
}) {
  return (
    <div
      className={cx(
        `text-xl text-left whitespace-pre-wrap bg-white px-12 py-12 ${
          hasMarginTop && 'mt-32'
        }`
      )}
      key={sender}
    >
      <div className="text-black">{letter}</div>
      <div className="text-lg text-gray-800 text-right mt-8">{sender}</div>
    </div>
  )
}
