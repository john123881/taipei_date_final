import React from 'react';
import SideBar from '@/components/date/side-bar';
import InterestCard from '@/components/date/interest-card';
import IndexInterestModal from '@/components/date/interest-modal';
import ConfirmModal from '@/components/date/modal/confirm-modal';

export default function SelectInterests() {
  const initialTabs = [
    { title: '找新朋友', path: '/date/select-interests', active: true },
    { title: '好友列表', path: '/date/friends-list', active: false },
    { title: '聊天室', path: '/date/chat-room', active: false },
  ];

  // 點擊按鈕時的處理函式
  const handleConfirmClick = () => {
    // 在這裡處理點擊確認按鈕後的邏輯
    console.log('確認按鈕被點擊了');
  };

  return (
    <>
      <SideBar tabs={initialTabs} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          等你來開啟精彩的相遇！
        </h1>
        <p className="text-base md:text-lg mb-6 text-center px-4">
          以喜愛的酒吧和電影為起點，找到共同興趣的夥伴，共赴酒吧和電影的奇妙時光！
        </p>
        <InterestCard />
        {/* <IndexInterestModal />
        <ConfirmModal
          title="配對中..."
          message="我喜歡去運動酒吧與看動作片的電影"
          buttonText="重新選擇"
          onButtonClick={handleConfirmClick}
        /> */}
      </div>
    </>
  );
}
