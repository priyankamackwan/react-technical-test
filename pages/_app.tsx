import Navbar from '@/src/components/Header/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import { trpc } from '../utils/trpc';
import Footer from '@/src/components/Footer/Footer';
 function App({ Component, pageProps }: AppProps) {
  return( 
  <>
  <CssBaseline/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer />
  </>)
}
export default trpc.withTRPC(App)