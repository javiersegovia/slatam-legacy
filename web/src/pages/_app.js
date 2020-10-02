import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppLayout from '@@components/Layout'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '@@graphql/apollo'
import '../../public/scss/application.scss'

function SlatamApp({ Component, apollo, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <ApolloProvider client={apollo}>
        <AppLayout>
          <CssBaseline />
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </AppLayout>
      </ApolloProvider>
    </>
  )
}

SlatamApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default withApollo(SlatamApp)
