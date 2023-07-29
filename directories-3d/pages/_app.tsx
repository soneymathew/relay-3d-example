import '../styles/globals.css';
import {Layout} from '../components/LayoutComponents';
import {ReactRelayContainer} from '../lib/relay/app';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';

export default function RelayApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <ReactRelayContainer Component={Component} props={pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
