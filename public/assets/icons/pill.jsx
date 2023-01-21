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
        d="M4.929 19.071a5 5 0 0 1 0-7.071l2.828-2.828 7.071 7.07L12 19.073a5 5 0 0 1-7.071 0zm11.314-4.243L19.07 12A5 5 0 0 0 12 4.929L9.172 7.757l7.07 7.071z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
