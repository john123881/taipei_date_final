import { useState, useEffect } from 'react';
import Sidebar from '@/components/account-center/sidebar/sidebar';
import PageTitle from '@/components/page-title';
import Breadcrumbs from '@/components/account-center/breadcrumbs/breadcrumbs';
import BurgerMenu from '@/components/account-center/burgermenu/burger-menu';
// import ChangePWSuccessModal from '@/components/account-center/modal/change-pw-success-modal';

export default function AccountPlayGame({ onPageChange }) {
  const pageTitle = '會員中心';
  const currentPage = '遊戲遊玩';
  useEffect(() => {
    onPageChange(pageTitle);
  }, []);

  // const missionFinish = false
  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <div className="flex min-h-screen bg-dark ">
        <div className="z-40 sm:block">
          <Sidebar />
        </div>
        <div className="w-screen px-4 py-12 sm:px-6 md:px-8 lg:ps-14 lg:pe-44 xl:pe-60">
          <div className="flex flex-col w-full ">
            {/* 小漢堡START */}
            <div className="flex border-b border-solid item-center menu-title ps-0">
              <BurgerMenu />
              <div className="flex flex-row items-end">
                <div className="text-2xl text-light ms-3 min-w-[100px]">
                  {currentPage}
                </div>
              </div>
            </div>
            {/* 小漢堡END */}

            <div className="text-sm breadcrumbs ms-2">
              <Breadcrumbs currentPage={currentPage} />
            </div>

            {/* CONTENT1 START */}
            <div className="flex flex-col w-full border min-h-[580px] lg:mx-1 xl:mx-1 bg-base-300 rounded-box border-slate-700 rounded-3xl">
              <div className="container flex justify-center items-center border-b border-dashed border-slate-500 max-h-[53px] py-4">
                <div className="text-center basis-1/4">Score：</div>
                <span className="basis-1/4">00005</span>
                <div className="text-center basis-1/4">Time：</div>
                <span className="basis-1/4">00:32</span>
              </div>
              <div className="container relative w-full min-h-[527px]">
                <div className="absolute text-end right-[75px] w-full bottom-[115px]">
                  <kbd className="kbd">▲</kbd>
                </div>
                <div className="absolute text-end right-[40px] w-full bottom-[80px] ">
                  <kbd className="kbd">▶︎</kbd>
                </div>
                <div className="absolute text-end right-[110px] w-full bottom-[80px] ">
                  <kbd className="kbd">◀︎</kbd>
                </div>
                <div className="absolute text-end right-[75px] w-full bottom-[45px]">
                  <kbd className="kbd">▼</kbd>
                </div>
              </div>

              {/* <ChangePWSuccessModal /> */}
            </div>
            {/* CONTENT1 END */}
          </div>
        </div>
      </div>
    </>
  );
}
