import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { BiWindowClose, BiWindows } from 'react-icons/bi';
import ClipLoader from 'react-spinners/ClipLoader';
import { ReactSVG } from 'react-svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
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
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Layout>
      <ToastContainer />
    </>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="h-screen   w-[100vw] overflow-hidden bg-gray-900 flex flex-col">
      <nav className="flex group hover:border-b-gray-200/10 border border-transparent shadow shadow-gray-900    px-2 flex-shrink-0 overflow-hidden items-center flex-col md:flex-row text-sm h-8 w-full      bg-gray-950 z-100 ">
        <Link href="/">
          <div className="cursor-pointer group    flex items-baseline  justify-center">
            <ReactSVG
              className="w-4 group-hover:fill-sky-300 fill-white"
              src="/omic-logo.svg"
              loading={() => <ClipLoader />}
            />
            <p className="  leading-[50px] text-gray-100 hover:opacity-70 flex items-center justify-center overflow-hidden font-mono pl-1 ">
              mic
            </p>
          </div>
        </Link>
        <Link href="/">
          <p className="md:ml-6  px-1 py-[2px] rounded  md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 hover:bg-gray-100/20 cursor-pointer">
            Projects
          </p>
        </Link>
        <Link href="/chat-with-dev">
          <p className="md:ml-4  px-1 py-[2px] rounded  md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 hover:bg-gray-100/20 cursor-pointer">
            Literature
          </p>
        </Link>
        <Link href="/Assets">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            Assets
          </p>
        </Link>

        <Link href="/Experiments">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            Experiments
          </p>
        </Link>
        <Link href="/Graphs">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            Graphs
          </p>
        </Link>
        <Link href="/chat-with-dev">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            Lake
          </p>
        </Link>

        <Link href="/omicai">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            OmicAi
          </p>
        </Link>
        <Link href="/Resources">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            Resources
          </p>
        </Link>
        <Link href="/help">
          <p className="md:ml-4   md:mt-0  md:group-hover:block  text-xs text-gray-100     hover:text-sky-500 px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer">
            Help
          </p>
        </Link>

        <FullWindow />
      </nav>
      <div className="flex-grow flex-shrink-0">{children}</div>
    </section>
  );
}

function FullWindow() {
  const [full, setFull] = useState(false);

  function handleClick() {
    setFull((s) => !s);
    if (!document.fullscreenElement) {
      document.querySelector('#body')!.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  return (
    <p
      onClick={handleClick}
      className="absolute right-5 top-2   md:group-hover:block  text-sm text-gray-100     hover:text-sky-500  px-1 py-[2px] hover:bg-gray-100/20 rounded cursor-pointer"
    >
      {full ? <BiWindowClose /> : <BiWindows />}
    </p>
  );
}
