import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from '@heroicons/react/20/solid';
const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 flex flex-nowrap">
      <MoonIcon className="w-4 h-4" data-hide-on-theme="dark" />
      <SunIcon className="w-4 h-4" data-hide-on-theme="light" />
    </button>
  );
};

export default ThemeSwitcher;
