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
        d="M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v15H8V6zM6 7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1V7zm12 14h1a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-1v14zM10 7h4V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
