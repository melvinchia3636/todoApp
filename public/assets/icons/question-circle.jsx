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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 7a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 4.44 2.633 1.404 1.404 0 0 0-.383.288.303.303 0 0 0-.057.085v.494a1 1 0 1 1-2 0V13c0-.58.253-1.047.539-1.38.281-.33.63-.572.94-.742A1 1 0 0 0 12 9zm.999 4.011v-.004.005zM12 15a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
