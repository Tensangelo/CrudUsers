import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Head from "next/head";
// Components
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Gestor de usuarios</title>
          <meta name="Crud users" content="Angelo Gaona Front End Developer" />
          <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;