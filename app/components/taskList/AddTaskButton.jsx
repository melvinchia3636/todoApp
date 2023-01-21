'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import PocketBase from 'pocketbase';

import moment from 'moment';
import { Plus } from '../../../public/assets/icons';

export default function AddTaskButton({ collectionId }) {
  const router = useRouter();

  const [isActive, setActive] = useState(false);
  const [title, setTitle] = useState('');

  const taskTitleInput = useRef(null);

  const submitTask = async () => {
    const db = new PocketBase('http://127.0.0.1:8090');
    const task = {
      title,
      collection: collectionId,
      is_done: false,
      created_at: moment().format(),
    };
    await db.records.create('tasks', task);

    router.refresh();
    setTitle('');
    setActive(false);
  };

  return (
    <div
      onClick={() => {
        setActive(true);
        setTimeout(() => {
          taskTitleInput?.current.focus();
        }, 100);
      }}
      className="w-full h-16 rounded-xl flex items-center p-2 pl-4 gap-4 border-2 border-dashed border-base-200"
    >
      <div className="w-5 h-5 rounded-md border-4 border-custom-500 bg-custom-500 flex items-center justify-center">
        <Plus className="w-4 h-4 text-custom-50 stroke-3" />
      </div>
      <input
        ref={taskTitleInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-base bg-transparent placeholder-base-200 focus:placeholder-secondary-content placeholder:transition-colors py-2 flex-1"
        placeholder="Add a task"
        onBlur={() => {
          setTimeout(() => {
            setActive(false);
          }, 100);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            submitTask();
          }
        }}
      />
      <button
        type="button"
        onClick={submitTask}
        className={`h-full aspect-square bg-custom-500 hover:bg-custom-600 rounded-xl transition-all overflow-hidden ${
          isActive ? 'max-w-[3rem]' : 'max-w-0'
        }`}
      >
        <span className="mgc_arrow_right_fill text-lg text-custom-50" />
      </button>
    </div>
  );
}
