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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.32-5.573a1 1 0 1 0-1.64 1.146L10.08 11H9a1 1 0 1 0 0 2h2v1H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-1h2a1 1 0 1 0 0-2h-1.08l2.4-3.427a1 1 0 0 0-1.64-1.146L12 10.257l-2.68-3.83z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
