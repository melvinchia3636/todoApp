'use client';

import React from 'react';
import { ChevronDown } from '../../../../../../public/assets/icons';
import * as icons from '../../../../../../public/assets/icons';

export default function TaskCollectionInput({
  targetCollection,
  isCollectionChooserOpen,
  setCollectionChooserOpen,
}) {
  return (
    <div
      tabIndex={0}
      onClick={() => setCollectionChooserOpen(true)}
      className={`group picker-input cursor-pointer ${
        isCollectionChooserOpen && 'active'
      }`}
    >
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-content text-xl mgc_list_check_2_fill z-10" />
      <div className="flex items-center gap-1 pb-2 pt-7 px-4 relative left-8 w-[calc(100%-2rem)]">
        {targetCollection &&
          React.createElement(
            icons[
              targetCollection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              className: 'w-[18px] h-[18px]',
            },
          )}
        <input
          disabled
          type="text"
          value={targetCollection?.name || 'Pick a collection'}
          className="pointer-events-none !p-0 !left-0"
        />
        <label className="!left-4">Collection</label>
      </div>
      <span className="bar" />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-content">
        <ChevronDown className="w-5 h-5 stroke-1" />
      </div>
    </div>
  );
}
