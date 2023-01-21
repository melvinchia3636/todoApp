/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../themeContext';

const ROUTES = [
  { name: 'Home', icon: 'home_4_fill', path: '/' },
  {
    name: 'Collections',
    icon: 'list_check_2_fill',
    path: '/collections',
    hasCollapse: true,
  },
  {
    name: 'Projects',
    icon: 'folder_fill',
    path: '/projects',
    hasCollapse: true,
  },
  { name: 'Calendar', icon: 'calendar_fill', path: '/calendar' },
];

export default function Sidebar() {
  const currentRoute = usePathname();
  const { theme } = useContext(ThemeContext);

  return (
    <aside className="h-[calc(100%-1rem)] flex-shrink-0 p-2 pr-4 w-[24%] border-r-[1.5px] border-base-100 flex flex-col">
      <h1 className="font-semibold text-2xl pl-4">
        .to
        <span className="text-custom-500">do</span>
      </h1>
      <ul className="mt-16 text-gray-400 flex flex-col flex-1 relative isolate">
        <div
          className={`w-full h-[3.2rem] rounded-lg transition-all ${
            ROUTES.some(
              (route) =>
                currentRoute?.split('/')[1] === route.path.split('/')[1],
            )
              ? theme === 'light'
                ? 'bg-custom-50'
                : 'bg-custom-500 opacity-10'
              : 'bg-transparent'
          } absolute left-0 -translate-y-[0.8rem] z-[-1]`}
          style={{
            top: `${
              Math.max(
                0,
                ROUTES.findIndex(
                  (route) =>
                    currentRoute?.split('/')[1] === route.path.split('/')[1],
                ),
              ) * 3.2
            }rem`,
          }}
        />
        {ROUTES.map(({ name, icon, path, hasCollapse }) => (
          <li
            key={name}
            className={`h-[3.2rem] px-4 rounded-lg transition-all hover:text-custom-500 ${
              currentRoute?.split('/')[1] === path.split('/')[1] &&
              'text-custom-500'
            }`}
          >
            <Link href={path}>
              <span className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-5 font-medium">
                  <span className={`text-xl -mt-[2px] mgc_${icon}`} />
                  {name}
                </div>
                {hasCollapse && (
                  <span className="text-base -mt-[2px] mgc_right_fill" />
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-16 text-gray-400 flex flex-col relative">
        <li
          className={`py-4 px-4 relative rounded-lg transition-all overflow-hidden hover:text-custom-500 isolate ${
            currentRoute === '/settings' && 'text-custom-500'
          }`}
        >
          <div
            className={`absolute w-full h-full top-0 left-0 z-[-1] transition-all ${
              currentRoute === '/settings' &&
              (theme === 'light' ? 'bg-custom-50' : 'bg-custom-500 opacity-10')
            }`}
          />
          <Link href="/settings">
            <span className="flex items-center gap-5 font-medium">
              <span className="text-xl -mt-[2px] mgc_settings_1_fill" />
              Settings
            </span>
          </Link>
        </li>
        <li className="py-3 px-4 rounded-lg">
          <Link href="/logout">
            <span className="flex items-center gap-5 font-medium">
              <span className="text-xl -mt-[2px] mgc_exit_door_fill" />
              Log out
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
