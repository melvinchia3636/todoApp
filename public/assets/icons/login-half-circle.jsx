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
        d="M13.204 2.244C11.347 1.826 10 3.422 10 5v14c0 1.578 1.347 3.174 3.204 2.756C17.666 20.752 21 16.766 21 12s-3.334-8.752-7.796-9.756zm.089 6.049a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.586 13H4a1 1 0 1 1 0-2h10.586l-1.293-1.293a1 1 0 0 1 0-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
