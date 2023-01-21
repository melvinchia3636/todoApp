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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 16v3m0 3v-3m0 0h-3m3 0h3"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.587 0 1.161-.05 1.72-.147A5.973 5.973 0 0 1 13 19c0-1.746.746-3.318 1.936-4.414l-2.278-1.139A3 3 0 0 1 11 10.764V7a1 1 0 1 1 2 0v3.764a1 1 0 0 0 .553.894l2.894 1.448c.149.074.271.18.362.306A5.986 5.986 0 0 1 19 13c1.033 0 2.004.26 2.853.72A10.15 10.15 0 0 0 22 12c0-5.523-4.477-10-10-10z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
