import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">WANT TO DATE?</h1>
      <p className="text-lg mb-6 sm:text-center sm:px-4 sm:mx-auto max-w-screen-md px-4">
        <span className="inline-block text-center">
          Taipei Date與你共赴奇遇，交友輕鬆又有趣，創造屬於你的精彩時光！
        </span>
      </p>

      <button className="btn-primary bg-neongreen text-black font-bold py-2 px-6 rounded-full sm:py-2 sm:px-8 sm:w-1/2">
        <Link href="/date/select-interests">開始填寫！</Link>
      </button>
    </div>
  );
}
