import React from 'react';
import SearchBar from '@/components/date/search-bar';
import ChatMsg from '@/components/date/chat-msg';
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
        <div className="flex-grow bg-gray-400 border border-gray-500 p-4 md:p-8 flex flex-col items-center md:mx-0 rounded-xl flex-grow h-screen md:min-h-1200 mb-4 md:mb-0 md:w-2/5">
          <div className="w-full md:w-auto flex flex-col justify-start md:justify-start ml-4 mb-4">
            <SearchBar />
            <ChatMsg />
          </div>
        </div>
        <div className="bg-transparent border border-gray-500 p-4 md:p-8 flex flex-col items-center mx-auto w-3/5 md:w-3/5 md:mx-0 rounded-xl flex-grow h-screen md:min-h-1200 mb-4 hidden md:block"></div>
      </div>
    </>
  );
}
