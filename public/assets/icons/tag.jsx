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
        d="M2 5a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879l8 8a3 3 0 0 1 0 4.242l-6.17 6.172a3 3 0 0 1-4.243 0l-8-8A3 3 0 0 1 2 11.172V5zm5 1a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
