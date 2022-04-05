import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta property="description" content="Min、黃閔弘、Minhonglolz"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap" rel="stylesheet"/>
        </Head>
        <body id="body">
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
export default MyDocument
