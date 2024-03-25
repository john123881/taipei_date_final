import React from 'react';
import SideBar from '@/components/date/side-bar';
import Friends from '@/components/date/friends';
import NewFriends from '@/components/date/new-friend-module';
import SearchBar from '@/components/date/search-bar';

export default function FriendsList() {
  const initialTabs = [
    { title: '找新朋友', path: '/date/select-interests', active: false },
    { title: '好友列表', path: '/date/friends-list', active: true },
    { title: '聊天室', path: '/date/chat-room', active: false },
  ];
  return (
    <>
      <SideBar tabs={initialTabs} />
      <div className="mx-4 md:mx-20 mt-10">
        <div className="flex flex-col md:flex-row">
          {/* 左側 */}
          <div className="bg-gray-400 border border-gray-500 p-4 md:p-8 flex flex-col items-center md:mx-auto rounded-xl flex-grow h-screen md:min-h-1200 mb-4 md:mb-0">
            <div className="w-full md:w-auto flex flex-col justify-start md:justify-start ml-4 mb-4">
              <SearchBar />
            </div>
            <div className="w-full md:w-auto flex flex-col justify-start md:justify-start ml-4 items-start">
              <Friends />
            </div>
          </div>
          {/* 右側*/}
          <div className="bg-transparent border border-gray-500 p-4 md:p-8 flex flex-col items-center mx-auto rounded-xl flex-grow h-screen md:min-h-1200 mb-4 hidden md:block">
            <NewFriends />
          </div>
        </div>
      </div>
    </>
  );
}
