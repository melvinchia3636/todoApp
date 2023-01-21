'use client';

import React from 'react';

export default function TaskNotesInput({ notes, setNotes }) {
  return (
    <div className="flex w-full">
      <div className="group">
        <span className="absolute left-4 top-5 text-secondary-content text-xl mgc_pen_fill -mt-[6px] z-10" />
        <textarea
          required
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <span className="bar" />
        <label>Notes (optional)</label>
      </div>
    </div>
  );
}
