import { useFragment, graphql } from 'react-relay';

const JiraProjectCategoryCell = ({ content }) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectCategoryCell_content on JiraProjectCategoryCell {
        project {
          category {
            name
          }
        }
      }
    `,
    content,
  );

  return data.project?.category?.name ? <span>{data.project.category.name}</span> : <span>&nbsp;</span>;
};

export default JiraProjectCategoryCell;
