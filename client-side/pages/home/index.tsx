import { ReactElement, useState } from 'react'
import type { GetStaticProps } from 'next'
import RcpHead from '../../components/base/RcpHead'
import { NextPageWithLayout } from '../../lib/types/layout'

const Home: NextPageWithLayout<{ payload: string }> = ({ payload }) => {
  return (
    <>
      <RcpHead title='Home' />

      <section>
        <h1>
          Hello, world!
        </h1>
      </section>
    </>
  )
}

Home.getLayout = function (page: ReactElement) {
  return (
    <>
      <main>
        {page}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home
