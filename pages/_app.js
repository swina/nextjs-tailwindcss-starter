import '../styles/global.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Navbar/>
        <div className="mt-20 container mx-auto">
        <Component {...pageProps} />
        </div>
      </>
  )
}

export default MyApp