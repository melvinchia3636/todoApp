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
        d="M11.514 3.126a1 1 0 0 1 .972 0l9 5A1 1 0 0 1 21 10v9a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2v-9a1 1 0 0 1-.486-1.874l9-5zM9 13a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
