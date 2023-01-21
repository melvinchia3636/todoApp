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
        d="M6 3c1 0 3 .6 3 3S7 9 6 9h12M6 3h12c1 0 3 .6 3 3s-2 3-3 3M6 3c-1 0-3 .6-3 3v13.002C3 20.106 3.895 21 5 21h5.5M18 9v1M7 13h3m-3 4h3m4 2v-3m2 0h1.5a1.5 1.5 0 0 0 1.5-1.5v0a1.5 1.5 0 0 0-1.5-1.5H14v3m2 0 3 3m-3-3h-2m7 5-2-2m0 0 2-2m-2 2-2 2"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M9 6c0 2.4-2 3-3 3h12c1 0 3-.6 3-3s-2-3-3-3H6c1 0 3 .6 3 3z"
      />
    </svg>
  );
}
