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
        d="M12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 0 0 1.3 4.935l-1.249 3.749a1 1 0 0 0 1.265 1.265l3.749-1.25A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 6c-.902 0-1.731.297-2.4.8a1 1 0 1 1-1.2-1.6 6 6 0 0 1 8.4 8.4 1 1 0 0 1-1.598-1.2A4 4 0 0 0 12 8zm-5 3a1 1 0 0 1 1 1 4 4 0 0 0 4 4 1 1 0 1 1 0 2 6 6 0 0 1-6-6 1 1 0 0 1 1-1zm5-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
