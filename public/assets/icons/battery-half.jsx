import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H4zm17 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zM6 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zm5 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
