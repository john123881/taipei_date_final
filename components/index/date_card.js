import React from 'react';

export default function DateCard() {
  return (
    <>
      <div className="flex items-center justify-center p-4 space-x-20 bg-gray-800 border border-4 rounded-lg border-primary">
        <div className="flex flex-col items-center max-w-screen-md">
          <h1 className="mb-4 text-xl text-center md:text-2xl lg:text-2xl">
            Taipei Date浪漫啟程
          </h1>
          <p className="max-w-xs text-sm text-center md:text-base lg:text-base">
            我們深知交友的重要性，提供了豐富的功能，讓您輕鬆地找到心靈契合的伴侶。無論您是喜歡電影、喝酒，還是喜歡規劃一天的行程，共同的興趣和活動可以成為一段關係的契機，讓您和對方共度美好時光。
          </p>
        </div>

        <div className="max-w-xs">  
          <img
            className="w-full h-auto rounded-lg border-3"
            src="/date_card1.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
