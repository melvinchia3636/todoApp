/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import moment from 'moment';
import React, { useState, useEffect, useRef } from 'react';
import PocketBase from 'pocketbase';

import { useRouter } from 'next/navigation';
import FunctionButtons from './components/FunctionButtons';
import DatePickerPrompt from './components/prompts/DatePickerPrompt';
import CollectionChooserPrompt from './components/prompts/CollectionChooserPrompt';
import TaskTitleInput from './components/inputs/TaskTitleInput';
import TaskNotesInput from './components/inputs/TaskNotesInput';
import TaskDueDateInput from './components/inputs/TaskDueDateInput';
import TaskCollectionInput from './components/inputs/TaskCollectionInput';

function CreateModal({ isOpen, setIsOpen, success }) {
  const router = useRouter();

  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [isCollectionChooserOpen, setCollectionChooserOpen] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [collectionError, setCollectionError] = useState('');

  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [dueDate, setDueDate] = useState();
  const [targetCollection, setTargetCollection] = useState();

  const [collectionList, setCollectionList] = useState([]);

  const dateInput = useRef();

  const isDataValid = () => {
    let isValid = true;

    if (title.length === 0) {
      setTitleError('Title cannot be empty');
      isValid = false;
    }

    if (targetCollection === undefined) {
      setCollectionError('A collection must be selected');
      isValid = false;
    }
    return isValid;
  };

  const clearAllAndClose = () => {
    setTargetCollection(undefined);
    setDueDate(undefined);
    setDatePickerOpen(false);
    setCollectionChooserOpen(false);
    setTitle('');
    setNotes('');
    setIsOpen(false);
  };

  const fetchCollections = async () => {
    try {
      const db = new PocketBase('http://127.0.0.1:8090');
      const collections = await db.records.getList('collections', 1, 50);
      return collections.items;
    } catch {
      return [];
    }
  };

  const submitTask = async () => {
    if (isDataValid()) {
      const db = new PocketBase('http://127.0.0.1:8090');
      const task = {
        title,
        notes,
        due_date: dueDate,
        collection: targetCollection.id,
        is_done: false,
        created_at: moment().format(),
      };
      await db.records.create('tasks', task);
      clearAllAndClose();
      success();

      router.refresh();
    }
  };

  useEffect(() => {
    fetchCollections().then((collections) => setCollectionList(collections));
  }, [isCollectionChooserOpen]);

  useEffect(() => {
    if (title.length > 0) {
      setTitleError('');
    }
  }, [title]);

  useEffect(() => {
    if (targetCollection?.id) {
      setCollectionError('');
    }
  }, [targetCollection]);

  return (
    <div
      className={`w-full h-screen fixed flex items-center justify-center overscroll-contain ${
        isOpen ? 'z-[9999]' : 'z-[-1] transition-all delay-500'
      } top-0 left-0`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className={`w-full h-full absolute top-0 left-0 transition-colors duration-500 cursor-default ${
          isOpen ? 'bg-gray-900/20' : 'bg-transparent'
        }`}
      />
      <div
        className={`w-1/2 bg-base-100 rounded-2xl shadow-xl relative transition-all duration-500 p-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-[500%]'
        }`}
      >
        <h1 className="text-custom-500 flex items-center gap-2 text-xl font-medium">
          <span className="text-3xl -mt-[2px] mgc_coupon_fill" />
          New Task
        </h1>
        <div className="w-full flex flex-col">
          <div className="w-full mt-8 flex flex-col gap-4 form">
            <TaskTitleInput
              titleError={titleError}
              title={title}
              setTitle={setTitle}
            />
            <TaskNotesInput notes={notes} setNotes={setNotes} />
            <TaskDueDateInput
              isDatePickerOpen={isDatePickerOpen}
              setDatePickerOpen={setDatePickerOpen}
              dueDate={dueDate}
              setDueDate={setDueDate}
              dateInput={dateInput}
            />
            <TaskCollectionInput
              setCollectionChooserOpen={setCollectionChooserOpen}
              setTargetCollection={setTargetCollection}
              targetCollection={targetCollection}
            />
          </div>
          <span className="text-red-500 mt-1 ml-4 text-xs">
            {collectionError}
          </span>
        </div>
        <FunctionButtons
          clearAllAndClose={clearAllAndClose}
          submitTask={submitTask}
        />
      </div>
      <DatePickerPrompt
        isOpen={isDatePickerOpen}
        setOpen={setDatePickerOpen}
        dueDate={dueDate}
        setDueDate={setDueDate}
      />
      <CollectionChooserPrompt
        isCollectionChooserOpen={isCollectionChooserOpen}
        setCollectionChooserOpen={setCollectionChooserOpen}
        targetCollection={targetCollection}
        setTargetCollection={setTargetCollection}
        collectionList={collectionList}
      />
    </div>
  );
}

export default CreateModal;
