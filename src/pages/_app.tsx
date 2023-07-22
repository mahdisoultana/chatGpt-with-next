import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ReactSVG } from 'react-svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'regenerator-runtime/runtime';
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen   w-[100vw] overflow-hidden bg-gray-900">
      <nav className="flex group hover:border-gray-200 border border-transparent  md:rounded-full pl-5 md:pr-5  overflow-hidden items-center flex-col md:flex-row     absolute top-3 md:left-5 py-2 pb-0 z-100 ">
        <Link href="/">
          <div className="cursor-pointer group    flex items-baseline  justify-center">
            <ReactSVG
              className="w-9 group-hover:fill-yellow-300 fill-white"
              src="/omic-logo.svg"
              loading={() => <ClipLoader />}
            />
            <p className="text-4xl leading-[50px] hover:opacity-70 flex items-center justify-center overflow-hidden font-mono pl-1 ">
              mic
            </p>
          </div>
        </Link>
        <Link href="/chat-with-dev">
          <p className="md:ml-20 mt-5 md:mt-0 font-mono md:group-hover:block md:hidden text-sm hover:text-blue-500 cursor-pointer">
            chat with Dev
          </p>
        </Link>
      </nav>
      {children}
    </section>
  );
}
