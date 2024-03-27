import React from 'react';

export default function DateCard() {
  return (
    <>
      <div className="card card-side border border-2 border-primary shadow-xl ">
        <div className="card-body items-center">
          <h2 className="card-title mt-4">Taipei Date浪漫啟程</h2>
          <p className="max-w-xs text-center text-sm md:text-base lg:text-base mt-12">
            我們深知交友的重要性，提供了豐富的功能，讓您輕鬆地找到心靈契合的伴侶。無論您是喜歡電影、喝酒，還是喜歡規劃一天的行程，共同的興趣和活動可以成為一段關係的契機，讓您和對方共度美好時光。
          </p>
        </div>
        <figure>
          <img src="/date_card1.jpg" alt="約會" />
        </figure>
      </div>
    </>
  );
}
