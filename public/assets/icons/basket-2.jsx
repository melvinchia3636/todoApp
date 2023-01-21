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
        d="M9.612 6.084C9.16 6.711 9 7.494 9 8v1h6V8c0-.507-.16-1.289-.611-1.916C13.974 5.508 13.274 5 12 5c-1.274 0-1.974.508-2.388 1.084zM17 9V8c0-.827-.24-2.044-.988-3.084C15.226 3.825 13.926 3 12 3c-1.926 0-3.226.825-4.012 1.916C7.24 5.956 7 7.173 7 8v1H3a1 1 0 0 0 0 2h.095l.91 9.1A1 1 0 0 0 5 21h14a1 1 0 0 0 .995-.9l.91-9.1H21a1 1 0 1 0 0-2h-4zm-8 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm4 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm4 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
