import {useFragment, graphql} from 'react-relay';
import {JiraProjectCategoryCell_content$key} from '../../__generated__/JiraProjectCategoryCell_content.graphql';

const JiraProjectCategoryCell = ({
  content,
}: {
  content: JiraProjectCategoryCell_content$key;
}) => {
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

  return data.project?.category?.name ? (
    <span>{data.project.category.name}</span>
  ) : (
    <span>&nbsp;</span>
  );
};

export default JiraProjectCategoryCell;
