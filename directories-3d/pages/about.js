import Nav from '../components/Nav';
import {Content} from '../components/LayoutComponents';

export default function About(props) {
  return (
    <>
      <Nav />
      <Content>
        <p>This is the about page</p>
        <p>gqlEndPoint @ {props.gqlEndPoint}</p>
      </Content>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      gqlEndPoint: process.env.GRAPHQL_ENDPOINT
    },
  };
}
