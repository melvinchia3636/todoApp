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
        d="M8.707 2.879A3 3 0 0 1 10.828 2H17a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6.998A2.998 2.998 0 0 1 4 19V8.828a3 3 0 0 1 .879-2.12l3.828-3.83zM14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
