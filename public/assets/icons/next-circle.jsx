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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm6.498-4.865a1 1 0 0 1 .998-.003L15 10.848V8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0v-2.848l-6.504 3.716A1 1 0 0 1 7 16V8a1 1 0 0 1 .498-.865z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
