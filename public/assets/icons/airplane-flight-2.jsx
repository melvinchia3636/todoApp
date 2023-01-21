import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#a)">
        <path
          fill="currentColor"
          d="M19.02 9.121v4.271a1.346 1.346 0 0 1-2.57.557l-.965-2.12-1.414 1.414a2 2 0 0 1-2.828 0l-1.829-1.829a1.414 1.414 0 0 1 1-2.414h1.414a2 2 0 0 0 1.415-.586l.828-.828-2.02-.674a1.448 1.448 0 0 1 .554-2.818l4.648.31 1.768-1.768c.471-.471 1.697-1.131 2.828 0 1.132 1.131.472 2.357 0 2.828l-2.242 2.243a2 2 0 0 0-.586 1.414z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2 14.905c.705-1.234 1.825-2.32 3-3.204M2 22.404c1.072-3.002 3.055-5.564 5.023-7.5m.477 6.5c.721-1.442 1.96-3.077 3.087-4.405"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
