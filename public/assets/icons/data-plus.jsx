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
        d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7s4.03-4 9-4 9 1.79 9 4z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m9 4c-4.97 0-9-1.79-9-4m0 0v5c0 2.21 4.03 4 9 4m6-6v3m0 3v-3m0 0h3m-3 0h-3"
      />
    </svg>
  );
}
