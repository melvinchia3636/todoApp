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
        d="M13 20H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3m6 11h3a1 1 0 0 0 1-1v-2.5M13 20v-1"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M22 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6zm-4 .001a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v.001zm-1 5a1 1 0 0 0 1-1V10a1 1 0 1 0-2 0v.001a1 1 0 0 0 1 1zm1 3a1 1 0 1 1-2 0V14a1 1 0 1 1 2 0v.001z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
