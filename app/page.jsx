/* eslint-disable function-paren-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import React from 'react';
import PocketBase from 'pocketbase';
import CollectionListItem from './components/home/CollectionListItem';
import HomePageButton from './components/home/HomePageButton';

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getCollection() {
  const client = new PocketBase('http://127.0.0.1:8090');
  const collections = await client.records.getList('collections');

  for (const collection of collections.items) {
    const tasks = await client.records.getList('tasks', 1, 100, {
      filter: `collection = "${collection.id}" && is_done = false`,
    });

    collection.tasks = tasks?.items;
  }

  return collections?.items;
}

async function Home() {
  const collections = await getCollection();

  return (
    <section className="w-full px-16 py-8 overflow-scroll">
      <div className="w-full flex items-center justify-between mt-8 mb-4">
        <h1 className="text-lg font-medium text-custom-500">Dashboard</h1>
      </div>
      <p className="text-2xl block mt-6 leading-normal">
        Good Morning,
        <br />
        <span className="font-semibold text-3xl">John Davidson</span>
      </p>
      <HomePageButton />

      {collections.some((collection) => collection.tasks.length > 0) ? (
        collections.map(
          (collection) =>
            collection.tasks.length > 0 && (
              <CollectionListItem key={collection.id} collection={collection} />
            ),
        )
      ) : (
        <div className="pt-12 w-full flex items-center justify-center text-secondary-content text-xl">
          No unfinished tasks. =)
        </div>
      )}
    </section>
  );
}

export default Home;
