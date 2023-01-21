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
        d="M18 15v3m0 3v-3m0 0h3m-3 0h-3"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.803A5.972 5.972 0 0 1 12 18c0-.342.029-.677.084-1.003A1.048 1.048 0 0 1 12 17H8a1 1 0 1 1 0-2h4c.255 0 .488.095.665.253A6.029 6.029 0 0 1 14.681 13H8a1 1 0 1 1 0-2h8a1 1 0 0 1 .997 1.084A6.044 6.044 0 0 1 18 12c1.093 0 2.117.292 3 .803V6a3 3 0 0 0-3-3H6zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
