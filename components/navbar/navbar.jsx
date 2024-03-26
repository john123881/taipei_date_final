import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBell, FaBookmark } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import {
  BsGlobe2,
  BsChatSquareHeart,
  BsTicketPerforated,
} from 'react-icons/bs';
import { BiLink, BiSolidDrink } from 'react-icons/bi';
import { FiCalendar } from 'react-icons/fi';
import { Logo } from './logo';
import { useRouter } from 'next/router';

export default function Header({ currentPageTitle }) {
  const login = true;
  console.log(currentPageTitle);
  // const login = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = () => {
    // 在點擊LINK時設置狀態以收回.dropdown-content
    setIsDropdownOpen(false);
    // 在這裡處理LINK的跳轉
    router.push('/account-center/account-index');
  };
  return (
    <>
      <div className="sticky top-0 z-50 navbar bg-dark">
        <div className="ml-3 navbar-start">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden navbar-center md:flex">
          <ul className="px-0 menu menu-horizontal">
            <li>
              <a
                className="text-base sm:text-sm text-light hover:shadow-xl3 hover:text-neongreen sm:px-1 md:px-4  lg:px-8 {
                  currentPageTitle === '配對交友'
                    ? 'shadow-xl3 text-primary'
                    : ''
                }`"
                href="/date"
              >
                配對交友
              </a>
            </li>
            <li>
              <a
                className={`text-base text-light hover:shadow-xl3 hover:text-neongreen sm:text-sm sm:px-1 md:px42 lg:px-8 ${
                  currentPageTitle === '社群媒體'
                    ? 'shadow-xl3 text-primary'
                    : ''
                }`}
                href="/community"
              >
                社群媒體
              </a>
            </li>
            <li>
              <a
                className="text-base text-light hover:shadow-xl3 hover:text-neongreen sm:text-sm sm:px-1 md:px-4 lg:px-8"
                href="#"
              >
                行程規劃
              </a>
            </li>
            <li>
              <a
                className="text-base text-light hover:shadow-xl3 hover:text-neongreen sm:text-sm sm:px-1 md:px-4 lg:px-8"
                href="#"
              >
                酒吧探索
              </a>
            </li>
            <li>
              <a
                className="text-base text-light hover:shadow-xl3 hover:text-neongreen sm:text-sm sm:px-1 md:px-4 lg:px-8"
                href="#"
              >
                電影探索
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <button className=" btn-ghost btn-circle btn hover:shadow-xl3 hover:text-neongreen">
              <a
                className="flex justify-center text-2xl align-middle text-light "
                href="#"
              >
                <FaBell />
              </a>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 h-3/4 text-h6"
              // fixed dropdown menu to top right
              style={{ position: 'fixed', right: '30px', top: '70px' }}
            >
              <li>
                <a>Noti 1</a>
              </li>
              <li>
                <a>Noti 2</a>
              </li>
              <li>
                <a>Noti 3</a>
              </li>
              <li>
                <a>Noti 4</a>
              </li>
              <li>
                <a>Noti 5</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end">
            <button className=" btn-ghost btn-circle btn hover:shadow-xl3">
              <a
                className="flex justify-center text-2xl align-middle text-light "
                href="#"
              >
                <FaBookmark />
              </a>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 h-3/4 text-h6"
              // fixed dropdown menu to top right
              style={{ position: 'fixed', right: '30px', top: '70px' }}
            >
              <li>
                <a>Bookmark 1</a>
              </li>
              <li>
                <a>Bookmark 2</a>
              </li>
              <li>
                <a>Bookmark 3</a>
              </li>
              <li>
                <a>Bookmark 4</a>
              </li>
              <li>
                <a>Bookmark 5</a>
              </li>
            </ul>
          </div>

          <div
            className={`dropdown dropdown-end ${login ? 'hidden ' : ' block'}`}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:shadow-xl3"
            >
              <MdAccountCircle className="text-3xl align-middle text-light" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>登入</a>
              </li>
              <li>
                <a>註冊</a>
              </li>
            </ul>
          </div>

          <div
            className={`dropdown dropdown-end ${login ? ' block' : ' hidden'}`}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:shadow-xl3"
            >
              <div className="w-6 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li> */}
              <li>
                <a onClick={handleLinkClick}>會員中心</a>
              </li>
              <li>
                <a href="/account-center/account-play-game">玩遊戲</a>
              </li>
              <li>
                <a>登出</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom navbar for mobile */}
      <div className="z-50 h-20 bg-dark btm-nav btm-nav-sm md:hidden">
        <button
          className={`hover:active text-primary ${
            currentPageTitle === '配對交友' ? 'active text-primary' : ''
          }`}
        >
          <a
            className={`text-xs ${
              currentPageTitle === '配對交友' ? 'text-primary' : 'text-light'
            }  sm:px-0.5 lg:px-8 flex flex-col items-center hover:text-primary  hover:active:text-primary`}
            href="/date"
          >
            <BsChatSquareHeart className=" text-h5" />
            <span className="text-[9px] ">配對交友</span>
          </a>
        </button>
        <button
          className={`hover:active text-primary ${
            currentPageTitle === '社群媒體' ? 'active text-primary' : ''
          }`}
        >
          <a
            className={`text-xs ${
              currentPageTitle === '社群媒體' ? 'text-primary' : 'text-light'
            }  sm:px-0.5 lg:px-8 flex flex-col items-center hover:text-primary`}
            href="/community"
          >
            <BsGlobe2 className="text-h5" />
            <span className="text-[9px] ">社群媒體</span>
          </a>
        </button>
        <button
          className={`hover:active text-primary${
            currentPageTitle === '行程規劃' ? 'active text-primary' : ''
          }`}
        >
          <a
            className={`text-xs ${
              currentPageTitle === '行程規劃' ? 'text-primary' : 'text-light'
            }  sm:px-0.5 lg:px-8 flex flex-col items-center hover:text-primary`}
            href="#"
          >
            <FiCalendar className="text-h5" />
            <span className="text-[9px] ">行程規劃</span>
          </a>
        </button>
        <button
          className={`hover:active text-primary${
            currentPageTitle === '酒吧探索' ? 'active text-primary' : ''
          }`}
        >
          <a
            className={`text-xs ${
              currentPageTitle === '酒吧探索' ? 'text-primary' : 'text-light'
            }  sm:px-0.5 lg:px-8 flex flex-col items-center hover:text-primary`}
            href="#"
          >
            <BiSolidDrink className=" text-h5" />
            <span className="text-[9px] ">酒吧探索</span>
          </a>
        </button>
        <button
          className={`hover:active text-primary${
            currentPageTitle === '電影探索' ? 'active text-primary' : ''
          }`}
        >
          <a
            className={`text-xs ${
              currentPageTitle === '電影探索' ? 'text-primary' : 'text-light'
            }  sm:px-0.5 lg:px-8 flex flex-col items-center hover:text-primary`}
            href="#"
          >
            <BsTicketPerforated className="text-h5" />
            <span className="text-[9px] ">電影探索</span>
          </a>
        </button>
      </div>
    </>
  );
}
