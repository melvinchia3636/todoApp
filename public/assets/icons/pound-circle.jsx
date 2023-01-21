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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-6c-.493 0-1.211.14-1.834.588C10.49 7.074 10 7.874 10 9v2H9a1 1 0 1 0 0 2h1v1c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-3.166c.12-.367.166-.72.166-1v-1h1a1 1 0 1 0 0-2h-1V9c0-.474.175-.674.334-.788.21-.152.493-.212.666-.212.173 0 .456.06.666.212.159.114.334.314.334.788a1 1 0 1 0 2 0c0-1.126-.492-1.926-1.166-2.412A3.233 3.233 0 0 0 13 6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
