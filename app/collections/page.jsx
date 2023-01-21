import React from 'react';
import PocketBase from 'pocketbase';
import CollectionGrid from '../components/taskList/CollectionGrid';

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getCollection() {
  const client = new PocketBase('http://127.0.0.1:8090');
  const collections = await client.records.getList('collections');

  for (const collection of collections.items) {
    const finishedTasks = await client.records.getFullList('tasks', 100000, {
      filter: `collection = "${collection.id}" && is_done = true`,
    });

    const totalTasks = await client.records.getFullList('tasks', 100000, {
      filter: `collection = "${collection.id}"`,
    });

    collection.finishedTask = finishedTasks.length;
    collection.totalTask = totalTasks.length;
  }

  return collections?.items;
}

async function Collections() {
  const collections = await getCollection();

  return (
    <section className="w-full px-16 py-8 overflow-scroll">
      <div className="w-full flex items-center justify-between mt-8 mb-4">
        <h1 className="text-lg font-medium text-custom-500">Collections</h1>
      </div>
      <p className="text-2xl block mt-6 leading-normal font-semibold">
        All Collections
      </p>
      <CollectionGrid collections={collections} />
    </section>
  );
}

export default Collections;
