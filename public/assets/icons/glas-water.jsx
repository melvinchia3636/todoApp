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
        d="M15.234 20H8.766a2 2 0 0 1-1.985-1.752L6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12l-.781 6.248A2 2 0 0 1 15.234 20z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.5 4h15M6 12l.781 6.248A2 2 0 0 0 8.766 20h6.468a2 2 0 0 0 1.985-1.752L18 12M6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12M6 12l-.938-7.5M18 12l.938-7.5"
      />
    </svg>
  );
}
