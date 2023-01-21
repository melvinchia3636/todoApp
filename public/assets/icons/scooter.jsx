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
        d="M8.126 4H6a1 1 0 0 0 0 2h2.126a4.007 4.007 0 0 1 0-2zm.32 2.836C5.725 8.314 5 11.355 5 13v5a3 3 0 0 0 3 3h.028A3.477 3.477 0 0 1 8 20.556V15a4 4 0 0 1 8 0v5.556c0 .15-.01.299-.028.444H16a3 3 0 0 0 3-3v-5c0-1.645-.726-4.686-3.445-6.164a4 4 0 0 1-7.11 0zM15.873 6H18a1 1 0 1 0 0-2h-2.126a4.01 4.01 0 0 1 0 2zM12 13a2 2 0 0 0-2 2v5.556c0 .797.647 1.444 1.444 1.444h1.112c.797 0 1.444-.647 1.444-1.444V15a2 2 0 0 0-2-2zm-2-8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
