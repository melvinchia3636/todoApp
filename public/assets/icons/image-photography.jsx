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
        d="M10 10V5a1 1 0 0 1 1-1h1l2-2h4l2 2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1z"
      />
      <circle
        cx="16"
        cy="7"
        r="1"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 2H5a3 3 0 0 0-3 3v10.5c0 .086.011.17.032.25A1 1 0 0 0 2 16v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5H11.335c.567.246 1.157.544 1.741.895 1.399.84 2.821 2.02 3.778 3.583a1 1 0 1 1-1.706 1.044c-.736-1.203-1.878-2.178-3.102-2.913-1.222-.734-2.465-1.192-3.327-1.392a15.466 15.466 0 0 0-3.703-.386h-.022c-.348.005-.68.02-.994.045V5a1 1 0 0 1 1-1h2V2zm0 4.473a2.23 2.23 0 0 0-.022.015C6.408 6.898 6 7.574 6 8.5c0 .926.408 1.601.978 2.011l.022.016V6.473z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
