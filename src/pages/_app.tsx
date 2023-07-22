import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'regenerator-runtime/runtime';

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Omics Features Project: Crafted by Mahdi Soultana 😊, Guided by
          Gabriel, Powered by Next.js
        </title>
        <meta
          name="description"
          content="Introducing the 'Omics Features Project' by dev Mahdi Soultana, with guidance from expert Richman Gabriel . Utilizing Next.js, it revolutionizes 'Omics' analysis for researchers—efficient, scalable, and user-friendly. Explore genomics and proteomics data like never before!"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
