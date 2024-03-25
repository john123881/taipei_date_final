import React from 'react';
import SearchBar from '@/components/date/search-bar';
import ChatMsg from '@/components/date/chat-msg';
import { TiThMenu } from 'react-icons/ti';
import ChatMsgContext from '@/components/date/chat-msg-context';
import SideBar from '@/components/date/side-bar';

export default function ChatRoom() {
  const initialTabs = [
    { title: '找新朋友', path: '/date/select-interests', active: false },
    { title: '好友列表', path: '/date/friends-list', active: false },
    { title: '聊天室', path: '/date/chat-room', active: true },
  ];
  return (
    <>
      <SideBar tabs={initialTabs} />
      <div className="flex flex-col md:flex-row mx-4 md:mx-20 mt-10">
        {/* 左側開始 */}
        <div className="flex-grow bg-gray-400 border border-gray-500 p-4 md:p-8 flex flex-col items-center md:mx-0 rounded-xl flex-grow h-screen md:min-h-1200 mb-4 md:mb-0 md:w-2/5 hidden md:flex">
          <div className="w-full md:w-auto flex flex-col justify-start md:justify-start ml-4 mb-4">
            <SearchBar />
            <ChatMsg />
          </div>
        </div>
        {/* 左側結束 */}

        {/* 右側開始 */}
        <div className="bg-transparent border border-gray-500 md:p-0 flex flex-col mx-auto w-full md:w-3/5 md:mx-0 rounded-xl flex-grow h-screen md:min-h-1200 mb-4 md:block relative">
          <div className="flex items-center justify-between bg-white p-2 rounded-t-xl w-full">
            <p className="text-black">Abby</p>
            <TiThMenu className="text-black" />
          </div>
          <ChatMsgContext />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="mt-auto px-4 py-2 bg-white rounded-b-xl flex items-center justify-between">
              <input
                className="flex-grow bg-transparent placeholder-gray-500 focus:outline-none border border-primary rounded-full px-3 py-1 h-auto"
                type="text"
                placeholder="請輸入內容..."
              />
              <button className="px-4 py-1 btn-primary bg-primary border border-primary rounded-full text-white font-semibold h-auto">
                送出
              </button>
            </div>
          </div>
        </div>
        {/* 右側結束 */}
      </div>
    </>
  );
}
