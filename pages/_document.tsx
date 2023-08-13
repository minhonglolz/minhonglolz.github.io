import Document, { Html, Main, Head, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html className="scroll-smooth">
        <Head>
          <title>minhong</title>
          <meta property="og:title" key="title" content="Min、黃閔弘、Minhonglolz、z574512z@gmail.com、front-end、前端工程師"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,500&display=swap" rel="stylesheet"/>
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
