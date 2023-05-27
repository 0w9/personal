import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css"
import { NextSeo } from 'next-seo';
import Inspect from 'inspx';

function MyApp({ Component, pageProps }) {
  return (
    <Inspect>
        <NextSeo
          title="Lennard Dorst"
          description="Lennard Dorst is a software developer from Germany."
        />
      <Component {...pageProps} />
      <Analytics />
    </Inspect>
  );
}
 
export default MyApp;