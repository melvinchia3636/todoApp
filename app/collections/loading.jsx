import React from 'react';
import Loader from '../components/Loader';

function Loading() {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center text-lg gap-4">
      <Loader />
      Locating your data...
    </div>
  );
}

export default Loading;
