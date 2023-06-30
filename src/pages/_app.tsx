import 'regenerator-runtime/runtime';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '@/context/ContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
