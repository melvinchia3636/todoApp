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
        d="M11.5 22C4.7 22 3 16.333 3 13.5V10c0-.167.1-.5.5-.5s.5.333.5.5v2c1.215.722 1.877.699 3 0V4c0-.167.1-.5.5-.5s.5.333.5.5v8c1.93-.882 2.73-1.484 3-3V3c0-.167.1-.5.5-.5s.5.333.5.5v6c.622 1.739 1.26 2.168 3 2V4c0-.167.1-.5.5-.5s.5.333.5.5v7c.728.963 1.455 1.09 3 1V9c0-.167.1-.5.5-.5s.5.333.5.5v4.5c0 2.833-1.7 8.5-8.5 8.5z"
      />
    </svg>
  );
}
