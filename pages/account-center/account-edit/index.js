import { useState, useEffect } from 'react';
import Sidebar from '@/components/account-center/sidebar/sidebar';
import PageTitle from '@/components/page-title';
import Breadcrumbs from '@/components/account-center/breadcrumbs/breadcrumbs';
import BurgerMenu from '@/components/account-center/burgermenu/burger-menu';
import EditSuccessModal from '@/components/account-center/modal/edit-success-modal';
import Link from 'next/link';

export default function AccountPasswordChange({ onPageChange }) {
  const [username, setUsername] = useState('小明');
  const [userGender, setUserGender] = useState('男');
  const [userPhone, setUserPhone] = useState('0912345678');
  const [userBirthday, setUserBirthday] = useState('2000-01-01');
  const [userTextarea, setUserTextarea] = useState(
    '你好，我是小明，平常我喜歡去酒吧放鬆，有空也喜歡去看電影，很高興認識妳！'
  );
  const pageTitle = '會員中心';
  const currentPage = '資料編輯';
  useEffect(() => {
    onPageChange(pageTitle);
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUserGenderChange = (e) => {
    setUserGender(e.target.value);
  };

  const handleUserPhoneChange = (e) => {
    setUserPhone(e.target.value);
  };
  const handleUserBirthdayChange = (e) => {
    setUserBirthday(e.target.value);
  };
  const handleUserTextareaChange = (e) => {
    setUserTextarea(e.target.value);
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
            {/* 小漢堡START */}
            <div className="flex align-middle border-b border-solid menu-title ps-0">
              <BurgerMenu />
              <div className="text-2xl text-light ms-3">{currentPage}</div>
            </div>
            {/* 小漢堡END */}

            <div className="text-sm breadcrumbs ms-2">
              <Breadcrumbs currentPage={currentPage} />
            </div>

            {/* CONTENT1 START */}
            <form>
              <div className="flex flex-col h-full lg:mx-1 xl:mx-1 2xl:mx-12 lg:flex-row card bg-base-300 rounded-box place-items-center">
                {/* 大頭照START */}
                <div className="flex flex-col items-center justify-center rounded-full basis-1/2">
                  <div className="w-48 mx-4 mt-4 ">
                    <img
                      className="rounded-full"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                  <div className="max-h-[48px] w-[200px] mx-4 mt-8 justify-center flex">
                    <button className="w-1/2 min-h-[40px] h-[40px] sm:w-[140px] rounded-full border-dark  btn-primary btn bg-primary hover:bg-primary hover:shadow-xl3 hover:border-primary font-bold">
                      上傳照片
                    </button>
                  </div>
                  <div className="max-h-[48px] w-[200px] mx-4 mt-8 mb-0 lg:mb-4 ">
                    <p className="text-xs text-center md:text-sm">
                      檔案大小： 最大1MB
                    </p>
                    <p className="text-xs text-center md:text-sm">
                      檔案限制： .JPEG, .PNG
                    </p>
                  </div>
                </div>
                {/* 大頭照END */}

                <div className="container basis-1/2">
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start my-7">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3 ">
                      電子郵件：
                    </p>
                    <input
                      type="mail"
                      placeholder="Type here"
                      value={'XXX@gamil.com'}
                      readOnly
                      className="max-w-xs basis-1/2 lg:basis-2/3 input-sm input input-bordered text-slate-700"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mb-7">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3">
                      暱稱：
                    </p>
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      className="max-w-xs basis-1/2 lg:basis-2/3 input-sm input input-bordered"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mb-7">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3">
                      性別：
                    </p>
                    <input
                      type="text"
                      value={userGender}
                      onChange={handleUserGenderChange}
                      className="max-w-xs basis-1/2 lg:basis-2/3 input-sm input input-bordered"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mb-7">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3">
                      手機號碼：
                    </p>
                    <input
                      type="tel"
                      value={userPhone}
                      onChange={handleUserPhoneChange}
                      className="max-w-xs basis-1/2 lg:basis-2/3 input-sm input input-bordered"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mb-7">
                    <p className="text-center ms-2 basis-1/2 sm:basis-1/2 lg:ms-0 lg:basis-1/3">
                      生日：
                    </p>
                    <input
                      type="date"
                      value={userBirthday}
                      onChange={handleUserBirthdayChange}
                      className="max-w-xs min-w-[202px] sm:min-w-[150px] lg:min-w-[180px] basis-1/2 sm:basis-1/2 lg:basis-2/3 input-sm input input-bordered"
                    />
                  </div>
                </div>
              </div>
              {/* CONTENT1 END */}

              <div className="divider"></div>

              {/* CONTENT2 START */}
              <div className="flex flex-col justify-start h-full mb-20 lg:mx-1 xl:mx-1 2xl:mx-12 bg-base-300 rounded-box">
                <div className="text-xl ms-2 text-light menu-title">
                  關於我：
                </div>
                <div className="flex flex-col justify-center mx-4 mt-4 mb-8 md: 2xl:mx-16">
                  <textarea
                    value={userTextarea}
                    placeholder="輸入些甚麼..."
                    className="w-full h-48 textarea textarea-bordered textarea-lg text-light"
                    onChange={handleUserTextareaChange}
                  ></textarea>
                  <div className="flex justify-end mt-[30px]">
                    <label
                      htmlFor="edit_success_modal"
                      className="btn w-1/2 min-h-[40px] h-[40px] sm:w-[140px] rounded-full border-dark  btn-primary  bg-primary hover:bg-primary hover:shadow-xl3 hover:border-primary font-bold"
                    >
                      編輯完成
                    </label>
                    <Link
                      href="/account-center/account-index"
                      className="btn w-1/2 min-h-[40px] h-[40px] sm:w-[140px] sm:ml-4  rounded-full  btn-outline bg-dark btn-md hover:bg-dark text-primary hover:text-primary hover:shadow-xl3 hover:border-dark"
                    >
                      取消編輯
                    </Link>

                    <EditSuccessModal />
                  </div>
                </div>
              </div>
              {/* CONTENT2 END */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
