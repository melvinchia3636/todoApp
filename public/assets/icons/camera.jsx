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
        d="M7.574 4.336A3 3 0 0 1 10.07 3h3.86a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 18.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h.93a1 1 0 0 0 .832-.445l.812-1.22zM10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
