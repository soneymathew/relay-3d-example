import {useFragment, graphql} from 'react-relay';

const JiraProjectLinkCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLinkCell_content on JiraProjectLinkCell {
        project {
          todo
        }
      }
    `,
    content,
  );

  return <span></span>;
};

export default JiraProjectLinkCell;
