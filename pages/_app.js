import {Layout} from "./common";

import Head from 'next/head'
const App = ({ Component, pageProps}) => {
  return (<>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" 
      content="width=device-width, user-scalable=no, 
      initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Soccer App</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default App