import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kiwa.ml</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kiwa.ml" />
        <p className="Best Undetected Free Cheats!">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
