import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
   <Head>
      <title>Igreja Evangélica Fluminense</title>
      <meta name="description" content="Igreja Evangélica Fluminense" />
      <link rel="icon" href="" />
   </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
