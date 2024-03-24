import { useState, useEffect } from 'react';
import Sidebar from '@/components/account-center/sidebar/sidebar';
import PageTitle from '@/components/page-title';
import Breadcrumbs from '@/components/account-center/breadcrumbs/breadcrumbs';
import BurgerMenu from '@/components/account-center/burgermenu/burger-menu';
import ChangePWSuccessModal from '@/components/account-center/modal/change-pw-success-modal';

export default function AccountPasswordChange({ onPageChange }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const pageTitle = '會員中心';
  const currentPage = '更改密碼';
  useEffect(() => {
    onPageChange(pageTitle);
  }, []);

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
            <div className="flex border-b border-solid item-center menu-title ps-0">
              <BurgerMenu />
              <div className="flex flex-row items-end">
                <div className="text-2xl text-light ms-3 min-w-[100px]">
                  {currentPage}
                </div>
                <span className="text-[10px] max-h-[32px] sm:text-[12px] text-secondary font-thin ml-2">
                  至少 8 個字元，需包含英文、數字及特殊符號。
                </span>
              </div>
            </div>
            {/* 小漢堡END */}

            <div className="text-sm breadcrumbs ms-2">
              <Breadcrumbs currentPage={currentPage} />
            </div>

            <form>
              {/* CONTENT1 START */}
              <div className="flex flex-col h-full lg:mx-1 xl:mx-1 2xl:mx-12 lg:flex-row card bg-base-300 rounded-box place-items-center">
                <div className="container">
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mt-7 me-16">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 ">
                      舊密碼：
                    </p>
                    <input
                      type="password"
                      onChange={handleOldPasswordChange}
                      className=" basis-1/2 input-sm input input-bordered"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mt-7 me-16">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 ">
                      新密碼：
                    </p>
                    <input
                      type="password"
                      onChange={handleNewPasswordChange}
                      className=" basis-1/2 input-sm input input-bordered"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center mx-4 lg:justify-start mt-7 me-16">
                    <p className="text-center ms-2 basis-1/2 lg:ms-0 ">
                      密碼確認：
                    </p>
                    <input
                      type="password"
                      onChange={handleConfirmPasswordChange}
                      className=" basis-1/2 input-sm input input-bordered"
                    />
                  </div>
                  <div className="flex justify-center mt-[30px] mx-4  mb-8 sm:mx-14 md:mx-16 lg:mx-14 xl:mx-16  2xl:mx-16">
                    <div className="hidden sm:block basis-1/3">{''}</div>
                    <div className="flex justify-center sm:justify-end basis-full sm:basis-2/3">
                      <label
                        htmlFor="change_pw_success_modal"
                        className="btn min-h-[40px] h-[40px] w-1/2 sm:w-[140px] rounded-full border-dark  btn-primary btn bg-primary hover:bg-primary hover:shadow-xl3 hover:border-primary font-bold"
                      >
                        確定更改
                      </label>
                      <a
                        href="/account-center/account-index"
                        className="btn min-h-[40px] h-[40px] w-1/2 sm:w-[140px] sm:ml-4 rounded-full btn btn-outline bg-dark btn-md hover:bg-dark text-primary hover:text-primary hover:shadow-xl3 hover:border-dark"
                      >
                        取消更改
                      </a>

                      <ChangePWSuccessModal />
                    </div>
                  </div>
                </div>
              </div>
              {/* CONTENT1 END */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
