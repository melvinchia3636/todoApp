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
        d="M19 21H5c-1.126 0-1.926-.491-2.412-1.166A3.233 3.233 0 0 1 2 18V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5h3a1 1 0 0 1 1 1v6c0 .493-.14 1.211-.588 1.834C20.925 20.51 20.125 21 19 21zm1-7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
