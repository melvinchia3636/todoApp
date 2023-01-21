/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Task from './Task';

export default function TaskItemList({ tasks, setEditTask }) {
  return (
    <div className="flex flex-col w-full gap-4">
      {tasks.length > 0 ? (
        tasks?.reverse().map((task) => (
          <div
            key={task.id}
            className="p-4 bg-base-100 rounded-xl hover:bg-base-200 transition-colors relative isolate"
          >
            <Task task={task} setEditTask={setEditTask} />
          </div>
        ))
      ) : (
        <p>
          <div className="w-full flex items-center justify-center text-secondary-content text-base">
            Nothing here ;-;
          </div>
        </p>
      )}
    </div>
  );
}
