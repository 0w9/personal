import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <body className="flex h-screen items-center justify-center font-sans">
        <Component {...pageProps} />
        </body>
    </>
  );
}