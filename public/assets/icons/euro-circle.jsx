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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8 0c0-.17.01-.336.031-.5H12a1 1 0 1 0 0-2H9.877A3.993 3.993 0 0 1 13 8c.902 0 1.731.297 2.4.8a1 1 0 0 0 1.2-1.6 6.001 6.001 0 0 0-9.057 2.3H7a1 1 0 0 0 0 2h.02a6.081 6.081 0 0 0 0 1H7a1 1 0 1 0 0 2h.544a6.001 6.001 0 0 0 9.057 2.3 1 1 0 0 0-1.201-1.6c-.669.503-1.498.8-2.4.8a3.992 3.992 0 0 1-3.123-1.5H12a1 1 0 1 0 0-2H9.031A4.039 4.039 0 0 1 9 12z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
