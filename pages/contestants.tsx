import Head from 'next/head'
import Image from 'next/image'
import Contestants from '../src/components/Contestants'

export default function ContestantPage() {
  return (
    <div>
      <Head>
        <title>Contestants</title>
      </Head>

      <main>
        <Image src="/assets/rose-clip-art-7.png" width="300px" height="300px" alt="Red rose" />
        <Contestants />
      </main>

      <footer />
    </div>
  )
}
