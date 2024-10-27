// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/leo1ple.css" />
          <meta charSet="utf-8" />
          <meta name="keywords" content="Directory, USA, Factory, Online, Brand Stores" />
          <meta name="description" content="Directory of US Factory and Brand Online Stores" />
          <meta name="author" content="Bogusław Siemiątkowski" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
