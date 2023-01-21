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
        d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3 1 1 0 1 1-2 0H8a1 1 0 1 1-2 0 3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h2zm2 0h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm0 5a1 1 0 0 0-2 0v6a1 1 0 1 0 2 0v-6zm6 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
