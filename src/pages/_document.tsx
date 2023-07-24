import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/omic-logo-light.svg"
          type="image/svg+xml"
        ></link>
      </Head>

      <body className="w-[100vw] overflow-x-hidden" id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
