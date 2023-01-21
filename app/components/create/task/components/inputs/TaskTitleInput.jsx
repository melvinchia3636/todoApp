import React from 'react';

export default function TaskTitleInput({ title, setTitle, titleError }) {
  return (
    <div className="flex flex-col w-full">
      <div className="group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-content text-xl mgc_coupon_fill z-50" />
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className="bar" />
        <label>Task title</label>
      </div>
      <span className="text-red-500 mt-1 ml-4 text-xs">{titleError}</span>
    </div>
  );
}
