import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className={`${
          process.env.NODE_ENV === 'development' && 'debug-screens'
        }`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
