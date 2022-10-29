import '../styles/globals.css'
import { AppPropsWithLayout } from '../lib/types/layout'
import { Fragment } from 'react';

function RcpApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const Layout = Component.layout ?? Fragment

  return (
    <Layout>
      { getLayout(<Component {...pageProps} />) }
    </Layout>
  )
}

export default RcpApp
