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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm.707-12.707 3 3a1 1 0 0 1-1.414 1.414L13 11.414V15a1 1 0 1 1-2 0v-3.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
