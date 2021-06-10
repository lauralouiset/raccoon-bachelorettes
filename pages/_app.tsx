import App from 'next/app'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'

import '../styles/globals.css'

class MyApp extends App {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage(
        // eslint-disable-next-line @typescript-eslint/no-shadow
        { enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) },
      )

      const initialProps = await App.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Raccoon Bachelorettes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
