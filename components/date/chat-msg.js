import React from 'react';
import Link from 'next/link';

export default function ChatMsg() {
  return (
    <>
      <Link href="/date/chat-room-context">
        <div className="flex items-center mx-4">
          <img
            className="w-16 h-16 md:w-20 md:h-20 border-3 border-green-500 rounded-full mr-4"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="會員照片"
          />

          <div className="flex flex-col flex-grow">
            <p>Xina</p>
            <p>Hello!你也喜歡去酒吧嗎？</p>
          </div>
          <div className="mr-8 text-right md:text-left ml-8 flex flex-col justify-center items-center my-1">
            <p>16:35</p>
            <div className="ml-4 bg-primary w-6 h-6 flex items-center justify-center rounded-full text-black text-xs">
              5
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
