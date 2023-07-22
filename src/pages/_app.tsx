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
        <title>omic features demo created by MahdiSoultana and gabriel</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
