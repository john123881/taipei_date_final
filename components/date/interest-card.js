import React from 'react';

export default function InterestCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <div className="flex flex-col justify-center items-center p-4 border-3 border rounded-2xl mb-8 md:mb-0">
        <img className="w-48 h-48 mb-4 md:mb-8" src="/bar.jpg" alt="酒吧圖片" />
        <p className="text-sm pb-4 md:pb-8">挑選一間喜愛的酒吧類型</p>
        <button className="w-24 md:w-32 py-1 md:py-2 mx-2 btn-primary bg-neongreen border-2 border-neongreen rounded-full text-pretty text-xs md:text-sm">
          選擇酒吧
        </button>
      </div>
      <div className="flex flex-col justify-center items-center p-4 border-3 border rounded-2xl">
        <img
          className="w-48 h-48 mb-4 md:mb-8"
          src="/movie.jpg"
          alt="電影院圖片"
        />
        <p className="text-sm pb-4 md:pb-8">挑選一種喜愛的電影類型</p>
        <button className="w-24 md:w-32 py-1 md:py-2 mx-2 btn-primary bg-neongreen border-2 border-neongreen rounded-full text-black text-xs md:text-sm">
          選擇電影
        </button>
      </div>
    </div>
  );
}
