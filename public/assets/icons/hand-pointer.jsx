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
        d="M20 17v1a2 2 0 0 1-2 2H8.236a2 2 0 0 1-1.789-1.106l-2.276-4.552A1.618 1.618 0 0 1 5.618 12H6a2 2 0 0 1 1.6.8L10 16V6a2 2 0 1 1 4 0v6a1 1 0 0 0 1 1h1a4 4 0 0 1 4 4z"
      />
    </svg>
  );
}
