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
        stroke-width="2"
        d="M18 4H6c-1.105 0-2.026.91-1.753 1.98a8.018 8.018 0 0 0 4.298 5.238c.823.394 1.455 1.168 1.455 2.08v6.084a1 1 0 0 0 1.447.894l2-1a1 1 0 0 0 .553-.894v-5.084c0-.912.632-1.686 1.454-2.08a8.017 8.017 0 0 0 4.3-5.238C20.025 4.91 19.103 4 18 4z"
      />
    </svg>
  );
}