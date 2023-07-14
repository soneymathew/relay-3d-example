import {Fragment} from 'react';
import {useFragment, graphql} from 'react-relay';
import {JiraGenericActionsField_content$key} from '../../__generated__/JiraGenericActionsField_content.graphql';
import {EllipsisHorizontalIcon} from '@heroicons/react/20/solid';
import {Menu, Transition} from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const JiraGenericActionsField = ({
  content,
}: {
  content: JiraGenericActionsField_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericActionsField_content on JiraGenericActionsField {
        actions {
          id
          name
        }
      }
    `,
    content,
  );

  return (
    <span>
      {data?.actions && (data?.actions?.length ?? 0) > 0 ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center rounded bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {data?.actions?.map((action, index) => (
                  <Menu.Item key={`menu-action-${index}`}>
                    {({active}) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        )}>
                        {action?.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : null}
    </span>
  );
};

export default JiraGenericActionsField;
