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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 13V5a2 2 0 0 0-2-2h-2m0 0H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M13 3v10.5M9 7v3"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.948 9.95 16.998 8v6.587c0 .89-1.077 1.337-1.707.707L13.996 14c-.5-.5-1.701-.8-2.502 0-.8.8-.5 2 0 2.5l4.918 4.915a2 2 0 0 0 1.414.585H20a1 1 0 0 0 1-1v-6.1a7 7 0 0 0-2.052-4.95z"
      />
    </svg>
  );
}
