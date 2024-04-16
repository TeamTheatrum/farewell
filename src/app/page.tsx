import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 text-left">
      <Link href="/jeongsu">To. Jeongsu</Link>
      <Link className="mt-8" href="/yuna">
        To. Yuna
      </Link>
    </main>
  )
}
