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
        d="M11 4.85c-2.195-1.022-5.52-1.565-8.633.979A1 1 0 0 0 2 6.603V19a1 1 0 0 0 1.633.774c2.736-2.236 5.734-1.31 7.367-.255V4.849zm2 0v14.669c1.633-1.056 4.63-1.981 7.367.255A1 1 0 0 0 22 19V6.603a1 1 0 0 0-.367-.774C18.52 3.285 15.195 3.828 13 4.849z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
