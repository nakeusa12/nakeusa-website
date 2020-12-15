import Head from 'next/head';
import Header from '../components/Header';

const Main = ({ children, title = 'Home' }) => {

  return (
    <div>
      <Head>
        <title>Nakeusaa | {title} </title>
      </Head>

      {/* header */}
      <Header />

      <main className="bg-gray-900 w-full min-h-screen" style={{backgroundImage: "url('/images/background.svg')"}}>
        {children}
      </main>
    </div>
  )
}

export default Main
