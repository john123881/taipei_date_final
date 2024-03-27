import React from 'react';

export default function RegisterAcc() {
  return (
    <div
      className="flex flex-col items-center justify-between bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/background.jpg)', height: '100vh' }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <button className="w-40 py-1 my-2 text-black border-2 rounded-full md:w-80 h-[55px] md:py-2 btn-primary bg-primary border-primary hover:shadow-xl3">
          建立帳號
        </button>
        <button className="w-40 py-1 my-2 bg-black border-2 rounded-full md:w-80 h-[55px] md:py-2 border-primary text-primary hover:shadow-xl3">
          登入會員
        </button>
      </div>
    </div>
  );
}
