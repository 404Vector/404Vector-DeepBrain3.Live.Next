import {Layout} from "./common";
//import { wrapper } from '../redux/store.ts'
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

// 최상위 계층인 App을 Redux로 감싸기 -> redux의 영역에 react(component)를 넣음
//export default wrapper.withRedux(App)
export default App