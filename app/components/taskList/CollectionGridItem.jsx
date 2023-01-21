'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import * as icons from '../../../public/assets/icons';
import { ThemeContext } from '../../themeContext';

export default function CollectionGridItem({ data }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link href={`/collections/${data.id}`} key={data.id}>
      <div className="bg-base-100 rounded-xl p-5  h-40">
        <div className="inline-block p-3 rounded-xl mb-6 relative isolate overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full h-full z-[-1] ${
              theme === 'light' ? 'bg-custom-100' : 'bg-custom-500'
            }`}
          />
          {React.createElement(
            icons[
              data.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              className: `w-5 h-5 ${
                theme === 'light' ? 'text-custom-500' : 'text-custom-50'
              }`,
            },
          )}
        </div>

        <div className="items-end justify-between flex">
          <div>
            <p className="font-medium text-lg">{data.name}</p>
            <p className="text-gray-400">
              {data.finishedTask}/{data.totalTask} done
            </p>
          </div>
          <div className="relative w-6 h-6">
            <div
              className={`radial-progress absolute top-0 left-0 ${
                theme === 'light' ? 'text-custom-100' : 'text-base-200'
              }`}
              style={{
                '--value': 100,
                '--size': '1.5rem',
                '--thickness': '4px',
              }}
            />
            {data.finishedTask > 0 && (
              <div
                className="radial-progress absolute top-0 left-0 text-custom-500"
                style={{
                  '--value': (data.finishedTask / data.totalTask) * 100,
                  '--size': '1.5rem',
                  '--thickness': '4px',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
