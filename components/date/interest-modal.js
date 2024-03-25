import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function InterestModal({ closeModal }) {
  return (
    <div className="p-4 gap-4 mx-10 max-w-screen-lg w-full md:w-96 flex flex-col justify-center items-center border-2 border-white rounded-lg shadow-lg">
      <p>選擇一種喜歡的酒吧類型</p>
      <label className="input input-bordered flex items-center gap-2 mb-3 ">
        <IoSearch />
        <input type="text" className="grow" placeholder="搜尋......" />
      </label>
      <div className="flex items-center space-x-24">
        <p>運動酒吧</p>
        <input
          type="radio"
          name="radio-5"
          className="radio radio-success h-4 w-4"
        />
      </div>
      <div className="flex items-center space-x-24">
        <p>音樂酒吧</p>
        <input
          type="radio"
          name="radio-5"
          className="radio radio-success h-4 w-4"
        />
      </div>
      <div className="flex items-center space-x-24">
        <p>異國酒吧</p>
        <input
          type="radio"
          name="radio-5"
          className="radio radio-success h-4 w-4"
        />
      </div>
      <div className="flex items-center space-x-24">
        <p>特色酒吧</p>
        <input
          type="radio"
          name="radio-5"
          className="radio radio-success h-4 w-4"
        />
      </div>
      <div className="flex items-center space-x-24">
        <p>其他酒吧</p>
        <input
          type="radio"
          name="radio-5"
          className="radio radio-success h-4 w-4"
        />
      </div>

      <button
        className="w-40 md:w-48 py-1 px-4 md:px-6 mx-2 bg-black border-2 border-neongreen rounded-full text-neongreen text-xs md:text-sm"
        onClick={closeModal} // 點擊按鈕時調用 closeModal 來關閉模態框
      >
        選擇酒吧
      </button>
    </div>
  );
}
