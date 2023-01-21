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
        d="M18.893 7.936a8.003 8.003 0 0 1-7.774 12.016m-6.012-3.888a8.003 8.003 0 0 1 7.774-12.016"
      />
      <circle
        cx="17.657"
        cy="6.343"
        r="2"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        transform="rotate(45 17.657 6.343)"
      />
      <circle
        cx="6.343"
        cy="17.657"
        r="2"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        transform="rotate(45 6.343 17.657)"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        transform="rotate(45 12 12)"
      />
    </svg>
  );
}
