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
        `text-xl text-left whitespace-pre-wrap ${hasMarginTop && 'mt-16'}`
      )}
      key={sender}
    >
      {letter}
    </div>
  )
}
