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
        d="M5 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 0v1m0 7v-1"
      />
      <path fill="currentColor" d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm0 0h1m9-2a2 2 0 1 1-2 2m2-2a2 2 0 0 0-2 2m2-2v-1m-2 3h-1"
      />
      <circle cx="5" cy="13" r="1" fill="currentColor" />
      <circle cx="11" cy="19" r="1" fill="currentColor" />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m17 13-.647.763-.001-.002-.004-.002-.01-.01-.039-.033-.137-.121a20.909 20.909 0 0 1-1.923-1.967c-.525-.617-1.072-1.343-1.491-2.109C12.335 8.766 12 7.892 12 7c0-1.547.538-2.825 1.49-3.711C14.431 2.413 15.69 2 17 2c1.31 0 2.569.413 3.51 1.289C21.462 4.175 22 5.453 22 7c0 .892-.335 1.766-.748 2.52-.42.765-.965 1.491-1.49 2.108a20.909 20.909 0 0 1-2.061 2.088l-.038.033-.011.01-.004.002v.001h-.001L17 13zm0 0 .646.763a1 1 0 0 1-1.292 0L17 13zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
