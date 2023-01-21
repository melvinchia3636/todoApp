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
        d="M15 18h6"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h7.083A6.036 6.036 0 0 1 12 18c0-1.148.322-2.22.881-3.131A3.001 3.001 0 0 1 9 12a3 3 0 1 1 5.869.881A5.972 5.972 0 0 1 18 12c1.537 0 2.939.578 4 1.528V8a3 3 0 0 0-3-3H5zm7 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}