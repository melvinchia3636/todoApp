'use client';

/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Link from 'next/link';
import { ChevronRight } from '../../../public/assets/icons';
import * as icons from '../../../public/assets/icons';
import { ThemeContext } from '../../themeContext';

export default function Header({ collection }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="w-full flex items-center gap-2 mt-8 mb-4">
        <Link href="/collections">
          <span className="text-secondary-content font-medium -mt-[2px] block">
            Collections
          </span>
        </Link>
        <ChevronRight className="w-4 h-4 text-secondary-content stroke-2" />
        <h1 className="text-lg font-medium text-custom-500">
          {collection.name}
        </h1>
      </div>
      <div className="flex items-center gap-4 my-6">
        <div className="inline-block p-3 rounded-xl relative isolate overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full h-full z-[-1] ${
              theme === 'light' ? 'bg-custom-100' : 'bg-custom-500'
            }`}
          />
          {React.createElement(
            icons[
              collection.icon
                .replace(/(?:-|^)([a-z0-9])/g, (g) =>
                  (g[1] || g[0])?.toUpperCase(),
                )
                .replace(/ /g, '')
            ],
            {
              className: 'w-5 h-5 text-custom-50',
            },
          )}
        </div>
        <p className="text-2xl block leading-normal font-semibold">
          {collection.name}
        </p>
      </div>
    </>
  );
}
