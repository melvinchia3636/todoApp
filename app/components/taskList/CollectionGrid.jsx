import React from 'react';
import * as icons from '../../../public/assets/icons';
import CollectionGridItem from './CollectionGridItem';

export default function CollectionGrid({ collections }) {
  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-6">
      {collections.map((e) => (
        <CollectionGridItem key={e.id} data={e} />
      ))}
      <div className="border-2 border-base-200 h-40 border-dashed flex items-center justify-center flex-col gap-2 rounded-xl p-5 ">
        <icons.Plus className="w-6 h-6 text-base-300" />
        <p className="text-base-300 font-medium text-base">Create</p>
      </div>
    </div>
  );
}
