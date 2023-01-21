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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.814-7.581a1 1 0 0 0-1.628 0l-5 7a1 1 0 0 0 0 1.162l5 7a1 1 0 0 0 1.628 0l5-7a1 1 0 0 0 0-1.162l-5-7zM12 12.923 9.693 12 12 11.077l2.307.923-2.307.923zm.371 2.005 1.832-.732L12 17.279l-2.203-3.083 1.832.732a1 1 0 0 0 .742 0zM12 6.72 9.797 9.804l1.832-.732a1 1 0 0 1 .742 0l1.832.732L12 6.72z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
