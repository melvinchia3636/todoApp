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
        d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.29A7 7 0 0 1 21 11.674V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4H5z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.29 20v1a1 1 0 0 0 .958-1.285L11.29 20zM21 11.674l-.43.903a1 1 0 0 0 1.43-.903h-1zm-9.594-5.565.832-.554-.832.554zm-.812-1.218-.832.554.832-.554zM4 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3h2zm0 12V6H2v12h2zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3v-2zm6.29 0H5v2h6.29v-2zm.958.715A6.002 6.002 0 0 1 12 18h-2c0 .793.116 1.56.331 2.285l1.917-.57zM12 18a6 6 0 0 1 6-6v-2a8 8 0 0 0-8 8h2zm6-6a5.96 5.96 0 0 1 2.57.577l.86-1.807A7.973 7.973 0 0 0 18 10v2zm2-3v2.674h2V9h-2zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm-5.93 0H19V6h-5.93v2zm-2.496-1.336A3 3 0 0 0 13.07 8V6a1 1 0 0 1-.832-.445l-1.664 1.11zm-.812-1.219.812 1.22 1.664-1.11-.812-1.22-1.664 1.11zM8.93 5a1 1 0 0 1 .832.445l1.664-1.11A3 3 0 0 0 8.93 3v2zM5 5h3.93V3H5v2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18 15v3m0 3v-3m0 0h-3m3 0h3"
      />
    </svg>
  );
}
