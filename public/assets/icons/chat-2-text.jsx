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
        d="M1 11c0-5.167 5.145-9 11-9s11 3.833 11 9-5.145 9-11 9c-1.198 0-2.354-.156-3.437-.447-.785.662-1.59 1.244-2.54 1.672C4.894 21.735 3.617 22 2 22a1 1 0 0 1-.707-1.707c.876-.876 1.843-1.914 2.368-3.416C2.029 15.327 1 13.28 1 11zm7-5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H8z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
