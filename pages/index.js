import Head from 'next/head'
import Image from 'next/image'
import HelloForm from '../Components/HelloForm'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-blue-custom'>
      <HelloForm/>
      </main>

 
    </div>
  )
}
