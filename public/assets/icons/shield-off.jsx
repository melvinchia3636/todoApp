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
        d="m3 3 18 18"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4.013 4.841A1 1 0 0 0 4 5v9c0 1.3.568 2.449 1.304 3.395.738.948 1.697 1.763 2.615 2.419a21.859 21.859 0 0 0 3.66 2.093l.018.008.006.003h.003a1 1 0 0 0 .788.001L12 21c.394.92.395.919.395.919l.002-.001.005-.003.02-.008.065-.029a21.482 21.482 0 0 0 1.07-.523 21.95 21.95 0 0 0 2.524-1.541c.536-.383 1.086-.82 1.598-1.306L4.013 4.84zm15.864 10.207A4.57 4.57 0 0 0 20 14V5a1 1 0 0 0-1.11-.994c-.653.073-1.798.075-3-.173-1.21-.25-2.373-.73-3.183-1.54a1 1 0 0 0-1.414 0c-.71.709-1.69 1.166-2.735 1.436l11.319 11.32zm-8.271 6.87L12 21l-.394.919z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
