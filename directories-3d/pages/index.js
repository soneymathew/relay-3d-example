import Nav from '../components/Nav';
import { Content } from '../components/LayoutComponents';

export default function Index() {
  return (
    <>
      <Nav />
      <Content>
        This app showcases 3D (aka Data driven Dependencies) a feature supported by <a className="underline" href="https://relay.dev/docs/glossary/#3d">Relay</a> graphql client
      </Content>
    </>
  );
}
