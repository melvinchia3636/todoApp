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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.93a2 2 0 0 1 1.664.89l.574.862a1 1 0 0 0 1.664 0l.574-.861A2 2 0 0 1 11.07 12H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18 10h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.93a2 2 0 0 0-1.664.89l-.574.862a1 1 0 0 1-1.664 0l-.574-.861A2 2 0 0 0 12.93 20H12a2 2 0 0 1-2-2v-1"
      />
    </svg>
  );
}
