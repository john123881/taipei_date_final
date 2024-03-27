import { useState, useEffect } from 'react';
import Sidebar from '@/components/account-center/sidebar/sidebar';
import PageTitle from '@/components/page-title';
import Breadcrumbs from '@/components/account-center/breadcrumbs/breadcrumbs';
import BurgerMenu from '@/components/account-center/burgermenu/burger-menu';
// import ChangePWSuccessModal from '@/components/account-center/modal/change-pw-success-modal';

export default function AccountRecord({ onPageChange }) {
  const pageTitle = '會員中心';
  const currentPage = '紀錄查詢';
  useEffect(() => {
    onPageChange(pageTitle);
  }, []);
  const [isChecked, setIsChecked] = useState(false);
  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
  };

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
            {/* 小漢堡 START */}
            <div className="flex border-b border-solid item-center menu-title ps-0">
              <BurgerMenu />
              <div className="flex flex-row items-end">
                <div className="text-2xl text-light ms-3 min-w-[100px]">
                  {currentPage}
                </div>
              </div>
            </div>
            {/* 小漢堡 END */}

            {/* Breadcrumbs START */}
            <div className="text-sm breadcrumbs ms-2">
              <Breadcrumbs currentPage={currentPage} />
            </div>
            {/* Breadcrumbs END */}

            {/* Toggle START */}
            <label className="grid px-4 mx-auto mt-4 border rounded-full cursor-pointer border-slate-700 bg-base-300 border-rounded place-items-center">
              <span
                className={`col-start-1 row-start-1 max-w-[145px] min-w-[130px] px-3 py-1 my-1 rounded-full text-center label-text ${
                  isChecked
                    ? 'text-light'
                    : 'text-dark bg-primary animate-pulse '
                }`}
              >
                積分查詢
              </span>
              <input
                type="checkbox"
                id="toggle"
                checked={isChecked}
                onChange={handleToggleChange}
                className="hidden col-span-2 col-start-1 row-start-1 toggle bg-base-content"
              />
              <span
                className={`col-start-2 row-start-1 max-w-[145px] min-w-[130px] px-3 py-1 my-1 rounded-full text-center label-text ${
                  isChecked
                    ? 'text-dark bg-primary animate-pulse '
                    : 'text-light'
                }`}
              >
                遊戲紀錄
              </span>
            </label>
            {/* Toggle END */}

            {/* SearchBar START */}
            <div className="flex justify-end mt-4 ps-8 item-center">
              <select
                className={`w-full max-w-[150px] min-w-[100px] border-slate-700 select select-bordered select-sm ${
                  isChecked ? 'hidden' : 'block '
                }`}
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

            {/* CONTENT1 START */}
            <div
              className={`mt-4 flex flex-col justify-between w-full  h-[580px] ${
                isChecked ? 'hidden' : 'block '
              } lg:mx-1 xl:mx-1 bg-base-300 rounded-box  place-items-center  rounded-3xl`}
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
                <tbody>
                  {Array(10)
                    .fill(1)
                    .map((v, i) => {
                      return (
                        <tr
                          key={i}
                          className=" text-slate-400 hover:text-primary"
                        >
                          <td className="text-base text-center ">2024/02/20</td>
                          <td className="text-base text-center ">10</td>
                          <td className="text-base text-center ">登入獲得</td>
                        </tr>
                      );
                    })}
                </tbody>
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
            </div>
            {/* CONTENT1 END */}

            {/* CONTENT2 START */}
            <div
              className={`mt-4 flex flex-col justify-between w-full h-[580px] ${
                isChecked ? 'block ' : 'hidden '
              } lg:mx-1 xl:mx-1 bg-base-300 rounded-box place-items-center rounded-3xl`}
            >
              <table className="container table py-4">
                <thead className="w-full ">
                  <tr className="border-b border-slate-500 min-h-[52px]">
                    <th className="text-lg text-center text-light">日期</th>
                    <th className="text-lg text-center text-light">得分</th>
                    <th className="text-lg text-center text-light">時間</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(10)
                    .fill(1)
                    .map((v, i) => {
                      return (
                        <tr
                          key={i}
                          className=" text-slate-400 hover:text-primary"
                        >
                          <td className="text-base text-center">2024/02/20</td>
                          <td className="text-base text-center">00011</td>
                          <td className="text-base text-center">01:55</td>
                        </tr>
                      );
                    })}
                </tbody>
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
            </div>
            {/* CONTENT2 END */}
          </div>
        </div>
      </div>
    </>
  );
}
