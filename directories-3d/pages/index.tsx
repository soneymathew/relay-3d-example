import type {NextPage} from 'next';
import Nav from '../components/Nav';
import {Content} from '../components/LayoutComponents';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
      </Head>
      <Nav />
      <Content>
        This app showcases 3D(aka Data driven Dependencies) a feature supported
        by&nbsp;
        <a className="underline" href="https://relay.dev/docs/glossary/#3d">
          Relay
        </a>
        &nbsp; GraphQL client
      </Content>
    </>
  );
};

export default Index;
