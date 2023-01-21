'use client';

import React, { useState } from 'react';
import * as icons from '../../../public/assets/icons';
import Header from './Header';
import AddTaskButton from './AddTaskButton';
import TaskItemList from './TaskItemList';
import TaskEdit from './TaskEdit';

export default function TaskItemListContainer({ collection, tasks }) {
  const [editTask, setEditTask] = useState(false);

  return (
    <section className="w-full flex overflow-hidden">
      <section className="overflow-scroll flex-1 px-16 py-8">
        <Header collection={collection} />
        <div className="flex flex-col w-full gap-4 mt-10">
          <AddTaskButton collectionId={collection.id} />
          <header className="flex items-center justify-between w-full text-secondary-content">
            <h3 className="font-medium">
              Pending Tasks - {tasks?.filter((task) => !task.is_done).length}
            </h3>
            <button
              type="button"
              className="px-4 py-2 rounded-lg font-medium gap-2 flex items-center"
            >
              <icons.Sort className="w-4 h-4" />
              Sort
            </button>
          </header>
          <TaskItemList
            tasks={tasks.filter((task) => !task.is_done)}
            setEditTask={setEditTask}
          />
          <header className="flex items-center justify-between w-full text-secondary-content">
            <h3 className="font-medium">
              Completed Tasks - {tasks?.filter((task) => task.is_done).length}
            </h3>
            <button
              type="button"
              className="px-4 py-2 rounded-lg font-medium gap-2 flex items-center"
            >
              <icons.Sort className="w-4 h-4" />
              Sort
            </button>
          </header>
          <TaskItemList
            tasks={tasks.filter((task) => task.is_done)}
            setEditTask={setEditTask}
          />
        </div>
      </section>
      <TaskEdit
        task={editTask}
        setEditTask={setEditTask}
        collection={collection}
      />
    </section>
  );
}
