import '../styles/globals.css';
import {Layout} from '../components/LayoutComponents';
import {ReactRelayContainer} from '../lib/relay/app';
import type {AppProps} from 'next/app';

export default function RelayApp({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <ReactRelayContainer Component={Component} props={pageProps} />
    </Layout>
  );
}
