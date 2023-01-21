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
        d="M12.707 4.121a1 1 0 0 0-1.414 0L10.414 5h3.172l-.879-.879zm3.66.879a1.003 1.003 0 0 0-.16-.207l-2.086-2.086a3 3 0 0 0-4.242 0L7.793 4.793a1.001 1.001 0 0 0-.16.207H5a3 3 0 0 0-3 3v6.5c0 .086.01.17.031.25-.02.08-.031.164-.031.25v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5a1 1 0 0 0-.032-.25.985.985 0 0 0 .032-.25V8a3 3 0 0 0-3-3h-2.634zM20 11.986V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6.016A1 1 0 0 0 5 15c2.689 0 4.861.353 6.585.87 2.34.702 3.853 1.708 4.717 2.551a1 1 0 1 0 1.396-1.431c-1.12-1.094-2.925-2.252-5.539-3.036a19.62 19.62 0 0 0-.773-.215c1.176-.573 2.472-.967 3.737-1.235A25.149 25.149 0 0 1 20 11.986zM5.978 8.488A2.674 2.674 0 0 1 7.5 8c.41 0 1.003.115 1.522.488.57.41.978 1.086.978 2.012 0 .926-.408 1.601-.978 2.011A2.674 2.674 0 0 1 7.5 13c-.41 0-1.003-.115-1.522-.489C5.408 12.101 5 11.427 5 10.5c0-.926.408-1.601.978-2.012z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
