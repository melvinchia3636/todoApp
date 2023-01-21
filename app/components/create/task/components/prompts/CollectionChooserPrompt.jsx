/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { CheckboxList } from '../../../../../../public/assets/icons';
import * as icons from '../../../../../../public/assets/icons';

export default function CollectionChooserPrompt(props) {
  return (
    <div
      className={`w-full h-screen fixed flex items-center justify-center overscroll-contain ${
        props.isCollectionChooserOpen
          ? 'z-[9999]'
          : 'z-[-1] transition-all delay-500'
      } top-0 left-0`}
    >
      <button
        type="button"
        onClick={() => props.setCollectionChooserOpen(false)}
        className={`w-full h-full absolute top-0 left-0 transition-colors duration-500 ${
          props.isCollectionChooserOpen ? 'bg-gray-900/20' : 'bg-transparent'
        }`}
      />
      <div
        className={`bg-white max-w-[50%] rounded-2xl shadow-xl relative transition-all duration-500 p-8 ${
          props.isCollectionChooserOpen ? 'translate-x-0' : 'translate-x-[500%]'
        }`}
      >
        <h1 className="text-custom-500 flex items-center gap-2 text-xl font-medium">
          <CheckboxList className="w-8 h-8" />
          Pick a collection
        </h1>
        <div className="mt-4">
          <div className="flex items-center gap-2 flex-wrap">
            {props.collectionList.map((collection) => (
              <button
                key={collection.id}
                type="button"
                onClick={() => {
                  props.setTargetCollection(collection);
                  setTimeout(() => {
                    props.setCollectionChooserOpen(false);
                  }, 100);
                }}
                className={`flex flex-shrink-0 items-center gap-2 p-3 rounded-lg transition-all ${
                  props.targetCollection?.id === collection.id
                    ? 'bg-custom-500 text-white hover:bg-custom-600'
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                }`}
              >
                {React.createElement(
                  icons[
                    collection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                      (g[1] || g[0])?.toUpperCase(),
                    )
                  ],
                  {
                    className: 'w-5 h-5',
                  },
                )}
                <span>{collection.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
