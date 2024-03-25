import React from 'react';
import NewFriendsModule from '@/components/date/new-friend-module';
import SideBar from '@/components/date/side-bar';

export default function NewFriendsPage() {
  const initialTabs = [
    { title: '找新朋友', path: '/date/select-interests', active: true },
    { title: '好友列表', path: '/date/friends-list', active: false },
    { title: '聊天室', path: '/date/chat-room', active: false },
  ];
  return (
    <>
      <SideBar tabs={initialTabs} />
      <NewFriendsModule />
    </>
  );
}
