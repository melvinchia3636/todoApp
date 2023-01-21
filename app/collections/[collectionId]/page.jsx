/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PocketBase from 'pocketbase';
import TaskItemListContainer from '../../components/taskList/TaskItemListContainer';

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getTasks(collectionId) {
  const client = new PocketBase('http://127.0.0.1:8090');
  const collection = await client.records.getOne('collections', collectionId);
  const tasks = await client.records.getList('tasks', 1, 50, {
    filter: `collection = "${collectionId}"`,
  });

  return {
    collection,
    tasks: tasks?.items,
  };
}

async function page({ params }) {
  const { collection, tasks } = await getTasks(params.collectionId);

  return <TaskItemListContainer collection={collection} tasks={tasks} />;
}

export default page;
