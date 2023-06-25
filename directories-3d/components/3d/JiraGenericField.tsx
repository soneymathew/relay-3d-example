import {useFragment, graphql} from 'react-relay';
import {JiraGenericField_content$key} from '../../__generated__/JiraGenericField_content.graphql';

const JiraGenericField = ({
  content,
}: {
  content: JiraGenericField_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericField_content on JiraGenericField {
        icon {
          image {
            medium
          }
          altText
        }
        label {
          stringValue
          linkUrl
          textTransform
        }
        color
      }
    `,
    content,
  );
  let iconValue = <></>;
  let labelValue = <span>&nbsp;</span>;
  if (data?.icon) {
    iconValue = (
      <img
        className="inline rounded-full"
        src={data?.icon?.image?.medium ?? ''}
        alt={data?.icon?.altText ?? ''}
        title={data?.icon?.altText ?? ''}
        height={24}
        width={24}
      />
    );
  }
  if (data?.color) {
    labelValue = (
      <a
        className={`inline-block border border-blue rounded py-1 px-3 text-white`}
        style={{backgroundColor: data?.color}}
        href="#">
        <span
          className={data?.label?.textTransform == 'UPPER' ? 'uppercase' : ''}>
          {data?.label?.stringValue}
        </span>
      </a>
    );
  } else if (data?.label?.stringValue && data?.label?.linkUrl) {
    labelValue = (
      <a className="underline" href={data?.label?.linkUrl}>
        {data?.label?.stringValue}
      </a>
    );
  } else if (data?.label) {
    labelValue = data?.label?.linkUrl ? (
      <a href={data?.label?.linkUrl}>🔗</a>
    ) : (
      <span
        className={data?.label?.textTransform == 'UPPER' ? 'uppercase' : ''}>
        {data?.label?.stringValue}
      </span>
    );
  }

  return (
    <>
      {iconValue} {labelValue}
    </>
  );
};

export default JiraGenericField;
