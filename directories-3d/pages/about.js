import Nav from '../components/Nav';
import {Content} from '../components/LayoutComponents';
import Head from 'next/head';

export default function About(props) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Nav />
      <Content>
        <p>This is the about page</p>
        <p>GRAPHQL_ENDPOINT @ {props.gqlEndPoint}</p>
        <p>VERCEL_URL @ {props.vercelUrl}</p>
      </Content>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      gqlEndPoint: process.env.GRAPHQL_ENDPOINT ?? null,
      vercelUrl: process.env.VERCEL_URL ?? null,
    },
  };
}
