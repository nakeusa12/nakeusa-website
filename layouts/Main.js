import Head from 'next/head';
import {useRouter} from "next/router"
import Header from '../components/Header';

const Main = ({ children, title = 'Home' }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div>
      <Head>
        <title>Nakeusaa | {title} </title>
      </Head>

      {/* header */}
      <Header />

      <main className="bg-gray-900 w-full h-screen" style={{backgroundImage: "url('/images/background.svg')"}}>
        {children}
      </main>
    </div>
  )
}

export default Main
