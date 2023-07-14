import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Bars3Icon, ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState(router.asPath);
  useEffect(() => {
    setCurrentRoute(router.asPath);
  }, [router.asPath]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href="https://relay.dev/docs/glossary/#3d"
            className="flex items-center">
            <Image
              src="https://relay.dev/img/relay.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
              width={36}
              height={36}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Relay 3D(Data Driven Dependencies) Demo
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div
            className={`${menuOpen ? '' : 'hidden '}w-full md:block md:w-auto`}
            id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`${
                    currentRoute === '/'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/[cloudId]/directory/[type]',
                    query: {cloudId: 'normal-user'},
                  }}
                  as="/normal-user/directory/projects"
                  className={`${
                    router.query.cloudId === 'normal-user' &&
                    router.query.type === 'projects'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/[cloudId]/directory/[type]',
                    query: {cloudId: 'admin-user'},
                  }}
                  as="/admin-user/directory/projects"
                  className={`${
                    router.query.cloudId === 'admin-user' &&
                    router.query.type === 'projects'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}>
                  Project Admin
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/[cloudId]/directory/[type]',
                    query: {cloudId: 'no-categories'},
                  }}
                  as="/no-categories/directory/projects"
                  className={`${
                    router.query.cloudId === 'no-categories' &&
                    router.query.type === 'projects'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}>
                  Without Categories
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/[cloudId]/directory/[type]',
                    query: {cloudId: 'only-software'},
                  }}
                  as="/only-software/directory/projects"
                  className={`${
                    router.query.cloudId === 'only-software' &&
                    router.query.type === 'projects'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}>
                  Only Software Projects
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/[cloudId]/directory/[type]',
                    query: {cloudId: 'anonymous-user'},
                  }}
                  as="/anonymous-user/directory/projects"
                  className={`${
                    router.query.cloudId === 'anonymous-user' &&
                    router.query.type === 'projects'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}>
                  As anonymous user
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/[cloudId]/directory/issues',
                    query: {cloudId: 'normal-user'},
                  }}
                  as="/normal-user/directory/issues"
                  className={`${
                    router.query.cloudId === 'normal-user'
                      ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                      : ' text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  } block py-2 pr-4 pl-3`}>
                  Issues
                </Link>
              </li>
              <li>
                <a
                  href="/voyager.html"
                  target={'_blank'}
                  className=" text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent block py-2 pr-4 pl-3">
                  <span className="mr-2 py-0.5 px-2.5 rounded-full inline-flex items-center">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      fill="#e10098">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z"
                      />
                      <circle cx="50" cy="9.3209" r="8.82" />
                      <circle cx="85.2292" cy="29.6605" r="8.82" />
                      <circle cx="85.2292" cy="70.3396" r="8.82" />
                      <circle cx="50" cy="90.6791" r="8.82" />
                      <circle cx="14.7659" cy="70.3396" r="8.82" />
                      <circle cx="14.7659" cy="29.6605" r="8.82" />
                    </svg>
                    <span>Schema</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
