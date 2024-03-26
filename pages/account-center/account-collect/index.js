import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/account-center/sidebar/sidebar';
import PageTitle from '@/components/page-title';
import Breadcrumbs from '@/components/account-center/breadcrumbs/breadcrumbs';
import BurgerMenu from '@/components/account-center/burgermenu/burger-menu';
import EventCard from '@/components/card/eventCard';
import { FiSend } from 'react-icons/fi';

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

            {/* TabBar START */}
            <div>
              <div
                role="tablist"
                className="grid-cols-3 mt-4 tabs tabs-bordered"
              >
                {/* SearchBar START */}
                <div className="flex justify-end item-center">
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

                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="貼文"
                  checked
                />
                {/* CONTENT1 START */}
                <div role="tabpanel" className="mt-2 tab-content">
                  <div
                    className={`mt-4 flex flex-col justify-between w-full  h-[580px]  lg:mx-1 xl:mx-1 bg-base-300 rounded-box  place-items-center  rounded-3xl`}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {/* Card START */}
                      <div className="shadow-xl card border-primary border w-[270px] h-[480px] bg-base-100">
                        <figure>
                          <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Shoes!</h2>
                          <p>
                            If a dog chews shoes whose shoes does he choose?
                          </p>
                          <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                      {/* Card END */}
                      {/* Card START */}
                      <div className="shadow-xl card border-primary border w-[270px] h-[480px] bg-base-100">
                        <figure>
                          <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Shoes!</h2>
                          <p>
                            If a dog chews shoes whose shoes does he choose?
                          </p>
                          <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                      {/* Card END */}
                      {/* Card START */}
                      <div className="shadow-xl card border-primary border w-[270px] h-[480px] bg-base-100">
                        <figure>
                          <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Shoes!</h2>
                          <p>
                            If a dog chews shoes whose shoes does he choose?
                          </p>
                          <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                      {/* Card END */}
                      {/* Card START */}
                      <div className="shadow-xl card border-primary border w-[270px] h-[480px] bg-base-100">
                        <figure>
                          <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">Shoes!</h2>
                          <p>
                            If a dog chews shoes whose shoes does he choose?
                          </p>
                          <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                      {/* Card END */}

                      {/* <EventCard />
                      <EventCard />
                      <EventCard /> */}
                    </div>

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
                </div>
                {/* CONTENT1 END */}

                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="酒吧"
                />
                {/* CONTENT1 START */}
                <div role="tabpanel" className="mt-2 tab-content">
                  <div
                    className={`mt-4 flex flex-col justify-between w-full  h-[580px]  lg:mx-1 xl:mx-1 bg-base-300 rounded-box  place-items-center  rounded-3xl`}
                  >
                    <table className="container table py-4 ">
                      <thead className="w-full ">
                        <tr className="border-b border-slate-500 min-h-[52px]">
                          <th className="text-lg text-center text-light ">
                            日期1
                          </th>
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
                </div>
                {/* CONTENT1 END */}

                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  className="tab"
                  aria-label="電影"
                />
                {/* CONTENT1 START */}
                <div role="tabpanel" className="mt-2 tab-content">
                  <div
                    className={`mt-4 flex flex-col justify-between w-full  h-[580px]  lg:mx-1 xl:mx-1 bg-base-300 rounded-box  place-items-center  rounded-3xl`}
                  >
                    <table className="container table py-4 ">
                      <thead className="w-full ">
                        <tr className="border-b border-slate-500 min-h-[52px]">
                          <th className="text-lg text-center text-light ">
                            日期1
                          </th>
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
                </div>
                {/* CONTENT1 END */}
              </div>
            </div>
            {/* TabBar END */}

            {/* CONTENT2 START */}

            {/* CONTENT2 END */}
          </div>
        </div>
      </div>
    </>
  );
}
