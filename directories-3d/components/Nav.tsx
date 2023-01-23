import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Bars3Icon} from '@heroicons/react/20/solid';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow">
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
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/directory/projects"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/directory/projectsAdmin"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
