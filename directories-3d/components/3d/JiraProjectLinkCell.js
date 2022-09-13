import { useFragment, graphql } from 'react-relay';

const JiraProjectLinkCell = ({ content }) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLinkCell_content on JiraProjectLinkCell {
        project {
          url
        }
      }
    `,
    content,
  );

  return data.project.url ? <a href={data.project.url}>🔗</a> : <span>&nbsp;</span>;
};

export default JiraProjectLinkCell;
