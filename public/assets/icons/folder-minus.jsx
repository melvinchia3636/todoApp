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
        d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.498A6.5 6.5 0 0 1 21 12.022V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4H5z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.498 20v1a1 1 0 0 0 .923-1.385l-.923.385zM21 12.022l-.54.842a1 1 0 0 0 1.54-.842h-1zm-9.594-5.913.832-.554-.832.554zm-.812-1.218-.832.554.832-.554zM4 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3h2zm0 12V6H2v12h2zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3v-2zm6.498 0H5v2h6.498v-2zm.923.615A5.48 5.48 0 0 1 12 17.5h-2c0 1.02.204 1.995.575 2.885l1.846-.77zM12 17.5a5.5 5.5 0 0 1 5.5-5.5v-2a7.5 7.5 0 0 0-7.5 7.5h2zm5.5-5.5a5.47 5.47 0 0 1 2.96.864l1.08-1.684A7.47 7.47 0 0 0 17.5 10v2zM20 9v3.022h2V9h-2zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm-5.93 0H19V6h-5.93v2zm-2.496-1.336A3 3 0 0 0 13.07 8V6a1 1 0 0 1-.832-.445l-1.664 1.11zm-.812-1.219.812 1.22 1.664-1.11-.812-1.22-1.664 1.11zM8.93 5a1 1 0 0 1 .832.445l1.664-1.11A3 3 0 0 0 8.93 3v2zM5 5h3.93V3H5v2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 18h6"
      />
    </svg>
  );
}
