import Head from 'next/head'
import Products from '../components/Products'
import NavBar from '../components/NavBar'


export default function Home() {

  return (
    <div className='flex flex-col'>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Products />
    </div>
  )
}