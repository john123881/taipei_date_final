import React from 'react';

export default function Friends() {
  return (
    <>
      <div className="flex justify-start items-center md:mt-4 ml-4 md:ml-0 w-200 md:w-full">
        <img
          className="w-16 h-16 md:w-20 md:h-20 border-3 border-green-500 rounded-full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="會員照片"
        />
        <p className="ml-4">Xina</p>
      </div>
    </>
  );
}
