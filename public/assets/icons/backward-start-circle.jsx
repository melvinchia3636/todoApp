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
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm5.493 7.13a1 1 0 0 0-1.008.013L13 10.233V9a1 1 0 0 0-1.514-.857L8 10.233V9a1 1 0 0 0-2 0v6a1 1 0 1 0 2 0v-1.234l3.486 2.091A1 1 0 0 0 13 15v-1.234l3.485 2.091A1 1 0 0 0 18 15V9a1 1 0 0 0-.507-.87zM11 12v-1.234L8.944 12 11 13.234V12zm5 1.234L13.944 12 16 10.766v2.468z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
