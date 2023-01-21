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
        d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6zm1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H8zm3 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1zm1 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12zm-5 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm10-3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
