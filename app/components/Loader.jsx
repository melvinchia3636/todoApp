import React from 'react';

function Loader() {
  return (
    <div className="loader">
      <svg viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32" />
      </svg>
    </div>
  );
}

export default Loader;
