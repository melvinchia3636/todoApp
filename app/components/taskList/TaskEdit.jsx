import React from 'react';
import moment from 'moment';

import * as icons from '../../../public/assets/icons';
import TaskNotesInput from '../create/task/components/inputs/TaskNotesInput';
import TaskDueDateInput from '../create/task/components/inputs/TaskDueDateInput';
import TaskCollectionInput from '../create/task/components/inputs/TaskCollectionInput';

export default function TaskEdit({ task, setEditTask, collection }) {
  return (
    <section
      className={`${
        task ? 'w-4/12' : 'w-0'
      } transition-all duration-500 h-full py-8" overflow-hidden`}
    >
      <div className="border-l-[1.5px] border-base-100 h-full w-full pl-6 form side flex flex-col justify-between">
        <div className="mt-4">
          <div className="flex gap-3 items-center text-lg font-medium">
            <button
              type="button"
              className="w-5 h-5 rounded-md border-2 border-custom-500"
            />
            {task.title}
          </div>
          <div className="w-full h-12 my-4 rounded-lg flex items-center pl-4 gap-3 border-2 border-dashed border-base-200">
            <div className="w-5 h-5 rounded-md flex items-center justify-center">
              <icons.Plus className="w-4 h-4 text-custom-500 stroke-3" />
            </div>
            <input
              className="text-base bg-transparent placeholder-base-200 focus:placeholder-secondary-content placeholder:transition-colors flex-1"
              placeholder="Add a step"
            />
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <TaskNotesInput notes={task.notes} />
            <TaskDueDateInput dueDate={task.due_date} />
            <TaskCollectionInput targetCollection={collection} />
          </div>
        </div>
        <div className="flex items-center justify-between w-full py-4 border-t-[1.5px] border-base-100">
          <button type="button" onClick={() => setEditTask(false)}>
            <span className="mgc_layout_right_fill text-lg text-secondary-content" />
          </button>
          <p className="text-secondary-content text-xs text-center font-medium">
            Created on {moment(task.created_at).format('ddd, MMMM DD')}
          </p>
          <button type="button">
            <span className="mgc_delete_fill text-lg text-secondary-content" />
          </button>
        </div>
      </div>
    </section>
  );
}
