import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraProjectDirectoryProjectTypesFilterCriteria = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectTypesFilterCriteria_content on JiraProjectDirectoryProjectTypesFilterCriteria {
        type
      }
    `,
    content,
  );

  return <span>Project types picker here</span>;;
};

export default JiraProjectDirectoryProjectTypesFilterCriteria;
