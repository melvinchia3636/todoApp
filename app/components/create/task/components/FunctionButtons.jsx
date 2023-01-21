/* eslint-disable react/prop-types */
import React from 'react';

export default function FunctionButtons({ clearAllAndClose, submitTask }) {
  return (
    <div className="flex items-center gap-2 mt-6 justify-end">
      <button
        type="button"
        onClick={clearAllAndClose}
        className="btn hover:bg-base-300 bg-base-200 px-6 text-secondary-content border-none normal-case"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={submitTask}
        className="btn btn-custom-500 bg-custom-500 hover:bg-custom-600 px-6 text-custom-50 normal-case"
      >
        Add Task
      </button>
    </div>
  );
}
