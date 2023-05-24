import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css"
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextSeo
          title="Lennard Dorst"
          description="Lennard Dorst is a software developer from Germany."
        />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;