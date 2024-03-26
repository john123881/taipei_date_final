import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/account-center/sidebar/sidebar';
import PageTitle from '@/components/page-title';
import Breadcrumbs from '@/components/account-center/breadcrumbs/breadcrumbs';
import BurgerMenu from '@/components/account-center/burgermenu/burger-menu';
import SidebarMobile from '@/components/sidebar/sidebarMobile';

export default function AccountCollect({ onPageChange }) {
  const pageTitle = '會員中心';
  const currentPage = '個人收藏';
  useEffect(() => {
    onPageChange(pageTitle);
  }, []);

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

            {/* Breadcrumbs START */}
            <div className="text-sm breadcrumbs ms-2">
              <Breadcrumbs currentPage={currentPage} />
            </div>
            {/* Breadcrumbs END */}

            {/* SearchBar START */}
            <div className="flex justify-end mt-4 ps-8 item-center">
              <select
                className={`w-full max-w-[150px] min-w-[100px] border-slate-700 select select-bordered select-sm `}
              >
                <option disabled selected>
                  選擇獲得來源
                </option>
                <option>登入獲得</option>
                <option>遊戲獲得</option>
              </select>
              <label className="flex items-center max-w-[150px] border-slate-700  w-full min-w-[150px] gap-1 ms-2 input input-bordered input-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="date"
                  className="grow input-sm"
                  placeholder="Search"
                />
              </label>
            </div>
            {/* SearchBar END */}

            {/* TabBar START */}
            <div role="tablist" className="tabs tabs-bordered">
              <input
                type="radio"
                name="pubTabs"
                role="tab"
                className="tab"
                aria-label="酒吧"
              />
              <div role="tabpanel" className="p-10 tab-content">
                酒吧
              </div>

              <input
                type="radio"
                name="movieTabs"
                role="tab"
                className="tab"
                aria-label="電影"
                checked
              />
              <div role="tabpane2" className="p-10 tab-content">
                電影
              </div>

              <input
                type="radio"
                name="postTabs"
                role="tab"
                className="tab"
                aria-label="貼文"
              />
              <div role="tabpane3" className="p-10 tab-content">
                貼文
              </div>
            </div>
            {/* TabBar END */}

            {/* CONTENT1 START */}
            <div
              className={`mt-4 flex flex-col justify-between w-full  h-[580px]  lg:mx-1 xl:mx-1 bg-base-300 rounded-box  place-items-center  rounded-3xl`}
            >
              <table className="container table py-4 ">
                <thead className="w-full ">
                  <tr className="border-b border-slate-500 min-h-[52px]">
                    <th className="text-lg text-center text-light ">日期</th>
                    <th className="text-lg text-center text-light ">
                      紅利積分
                    </th>
                    <th className="text-lg text-center text-light ">
                      獲得來源
                    </th>
                  </tr>
                </thead>
              </table>
              <div className="mb-3 join ">
                <button className="join-item btn border-slate-700 hover:bg-primary btn-xs">
                  «
                </button>
                <button className="join-item btn border-slate-700 hover:bg-primary btn-xs">
                  1
                </button>
                <button className="join-item btn border-slate-700 hover:bg-primary btn-xs">
                  2
                </button>
                <button className="join-item btn btn-outline hover:bg-primary btn-xs btn-disabled">
                  ...
                </button>
                <button className="join-item btn border-slate-700 hover:bg-primary btn-xs">
                  99
                </button>
                <button className="join-item btn border-slate-700 hover:bg-primary btn-xs">
                  100
                </button>
                <button className="join-item btn border-slate-700 hover:bg-primary btn-xs">
                  »
                </button>
              </div>
              {/* <ChangePWSuccessModal /> */}
            </div>
            {/* CONTENT1 END */}

            {/* CONTENT2 START */}

            {/* CONTENT2 END */}
          </div>
        </div>
      </div>
    </>
  );
}
