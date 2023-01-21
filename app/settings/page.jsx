/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-array-index-key */

'use client';

import React, { Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Auto from '../../public/theme/auto';
import Light from '../../public/theme/light';
import Dark from '../../public/theme/dark';
import Black from '../../public/theme/black';
import { ChevronDown } from '../../public/assets/icons';
import { ThemeContext } from '../themeContext';

const COLORS = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey',
];

function Settings() {
  const { themeColor, setThemeColor, theme, setTheme } =
    React.useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
  }, [themeColor]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section className="w-full px-16 py-8 overflow-scroll flex-1">
      <p className="text-2xl block mt-6 leading-normal font-semibold">
        Settings
      </p>
      <div className="mt-4 w-full">
        <h3 className="text-xl block mt-6 leading-normal font-medium">Theme</h3>
        <p className="text-gray-400">Select or customize your UI theme.</p>
        <div className="w-full flex gap-4 mt-6">
          {[
            { name: 'Auto', Image: Auto },
            { name: 'Light', Image: Light },
            { name: 'Dark', Image: Dark },
            { name: 'Black', Image: Black },
          ].map(({ name, Image }) => (
            <button
              type="button"
              onClick={() => setTheme(name.toLowerCase())}
              className="flex-1"
            >
              <div
                className={`${
                  theme === name.toLowerCase()
                    ? 'border-2 border-custom-500'
                    : 'border-[1.5px] border-base-100'
                } rounded-2xl overflow-hidden relative`}
              >
                {theme === name.toLowerCase() && (
                  <span className="mgc_check_circle_fill text-custom-500 text-xl block absolute bottom-2 right-2.5" />
                )}
                <Image />
              </div>
              <p
                className={`mt-2 ${
                  theme === name.toLowerCase() && 'text-custom-500 font-medium'
                }`}
              >
                {name}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full border-b-[1.5px] border-base-100 my-6" />
      <div className="mt-4 mb-12 w-full flex items-center justify-between">
        <div>
          <h3 className="text-xl block leading-normal font-medium">
            Accent color
          </h3>
          <p className="text-gray-400">
            Select or customize your UI accent color.
          </p>
        </div>
        <Listbox value={themeColor} onChange={(color) => setThemeColor(color)}>
          <div className="relative mt-1 w-48">
            <Listbox.Button className="relative w-full rounded-lg bg-background py-4 pl-4 pr-10 text-left border-[1.5px] border-base-100 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-custom-300 sm:text-sm flex items-center gap-2">
              <span className="bg-custom-500 w-4 h-4 rounded-full inline-block" />
              <span className="block truncate -mt-[1px]">
                {themeColor.split('-').slice(1).join(' ')}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition ease-in duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-base-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {COLORS.map((color, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-pointer select-none group hover:bg-custom-50 rounded-md transition-all py-3 px-4 flex items-center justify-between ${
                        active ? 'bg-custom-50' : '!bg-transparent'
                      }`
                    }
                    value={`theme-${color}`}
                  >
                    {({ selected }) => (
                      <>
                        <div>
                          <span className="flex items-center gap-2">
                            <span
                              className={`theme-${color} bg-custom-500 w-4 h-4 rounded-full inline-block`}
                            />
                            {color.split('-').join(' ')}
                          </span>
                        </div>
                        {selected && (
                          <span className="mgc_check_fill texy-lg text-gray-400 block group-hover:text-custom-200" />
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </section>
  );
}

export default Settings;
