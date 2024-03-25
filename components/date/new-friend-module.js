import React from 'react';
import SelectBtn from '@/components/date/select-btn';

export default function NewFriends() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-3xl font-bold mb-6">今日新朋友</h1>
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            className="w-64 h-64 border-3 border-green-500 rounded-lg"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="會員照片"
          />
        </div>
        <p className="mb-3 text-lg md:text-lg sm:text-base">Xina，28</p>
        <p className="mb-3 text-lg md:text-lg sm:text-base">運動酒吧、愛情片</p>
        <p className="mb-6 text-center text-lg md:text-lg sm:text-base">
          熱愛生活，尤其喜歡在風格獨特的酒吧中探索，期待找到能一同分享這份喜好的新朋友。
        </p>
        <SelectBtn />
      </div>
    </>
  );
}
