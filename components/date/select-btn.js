import React from 'react';

export default function SelectBtn() {
  return (
    <div className="flex justify-center">
      <button className="w-40 py-1 mx-2 md:w-60 md:py-2 bg-black border-2 border-green-500 rounded-full text-green-500">
        探索其他可能
      </button>
      <button className="w-40 btn-primary py-1 mx-2 md:w-60 md:py-2 bg-primary border-2 primary rounded-full text-black">
        開啟友誼之門
      </button>
    </div>
  );
}
