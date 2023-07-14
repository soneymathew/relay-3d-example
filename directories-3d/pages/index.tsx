import type {NextPage} from 'next';
import {Content} from '../components/LayoutComponents';
import Head from 'next/head';
import {FolderIcon} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'normal-user',
    description:
      'This is the view for a user that is not an admin. This user also do not have permission to create a project',
    href: '/normal-user/directory/projects',
    icon: FolderIcon,
  },
  {
    name: 'admin-user',
    description:
      'This is the view for a user that is an admin. Notice that the columns are different and the user can create a project',
    href: '/admin-user/directory/projects',
    icon: FolderIcon,
  },
  {
    name: 'no-categories',
    description:
      'In this instance there are no project categories. Note that categories picker and categories column are not loaded.',
    href: '/no-categories/directory/projects',
    icon: FolderIcon,
  },
  {
    name: 'only-software',
    description:
      'In this instance there are only software projects. All Jira Products picker need not be shown',
    href: '/only-software/directory/projects',
    icon: FolderIcon,
  },
  {
    name: 'anonymous-user',
    description:
      'In this case project categories should not be shown as user is not logged in. Note that categories picker and categories column are not loaded. There is also less number of projects that are available to be seen',
    href: '/anonymous-user/directory/projects',
    icon: FolderIcon,
  },
  {
    name: 'normal-user',
    description: 'View issues as a normal user',
    href: '/normal-user/directory/issues',
    icon: FolderIcon,
  },
];

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="About page" />
      </Head>
      <Content>
        <div className="bg-white dark:bg-gray-900 py-6 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Data driven Dependencies
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                aka <b>3D</b>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                a feature supported by{' '}
                <a
                  className="underline"
                  href="https://relay.dev/docs/glossary/#3d">
                  Relay
                </a>{' '}
                GraphQL client
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <feature.icon
                        className="h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-white">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-base font-semibold leading-7 text-indigo-600">
                          Visit page <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Index;
