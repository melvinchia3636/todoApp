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
        d="M5 9a1 1 0 0 0-.962.725L2.246 16h19.508l-1.793-6.275A1 1 0 0 0 19 9H5zm16.78 9H2.22l.431 1.728A3 3 0 0 0 5.561 22H18.44a3 3 0 0 0 2.91-2.272L21.78 18zM6.968 11.83A1.5 1.5 0 0 1 8.31 11h7.382a1.5 1.5 0 0 1 0 3H8.309a1.5 1.5 0 0 1-1.342-2.17z"
        clip-rule="evenodd"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3.728 5.55A2 2 0 0 1 5.651 3H18.35a2 2 0 0 1 1.923 2.55L19 10H5L3.728 5.55z"
      />
    </svg>
  );
}
