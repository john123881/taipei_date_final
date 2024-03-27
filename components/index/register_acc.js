import React, { useState } from 'react';

export default function RegisterAcc() {
  const [loginToggle, setLoginToggle] = useState(true);
  const toggleHandler = () => {
    setLoginToggle(!loginToggle);
  };

  return (
    <div
      className="flex flex-col items-center justify-between bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/background.jpg)', height: '100vh' }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <button
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className="w-40 py-1 my-2 text-black border-2 rounded-full md:w-80 h-[55px] md:py-2 btn-primary bg-primary border-primary hover:shadow-xl3"
        >
          登入會員
        </button>
        <button
          onClick={() => {
            document.getElementById('my_modal_3').showModal();
            toggleHandler();
          }}
          className="w-40 py-1 my-2 bg-black border-2 rounded-full md:w-80 h-[55px] md:py-2 border-primary text-primary hover:shadow-xl3"
        >
          建立帳號
        </button>
      </div>
      <dialog id="my_modal_3" className="modal ">
        <div className="w-11/12 max-w-[100%] md:max-w-[68%] lg:max-w-[54%] xl:max-w-[50%] items-center flex modal-box bg-light p-0 rounded-3xl">
          {/* if there is a button in form, it will close the modal */}
          <form method="dialog ">
            <button className="absolute z-30 btn btn-sm text-dark btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          {/* if there is a button in form, it will close the modal */}
          <div class="flex flex-wrap w-full relative">
            {loginToggle ? (
              <>
                {/* LeftSide */}
                <div
                  class={`flex flex-col w-full md:w-1/2 my-10 duration-500 ${
                    loginToggle ? '' : ' translate-x-[100%] '
                  } `}
                >
                  <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-4 lg:px-8">
                    <p class="text-h3 text-center text-dark font-bold">
                      會員登入
                    </p>
                    <form class="flex flex-col pt-6">
                      <div class="flex flex-col">
                        <label className="flex items-center gap-2 rounded-full input h-[37px] input-bordered bg-slate-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                          </svg>
                          <input
                            type="text"
                            className="grow text-slate-700"
                            placeholder="Email"
                          />
                        </label>
                      </div>
                      <div class="flex flex-col pt-5 ">
                        <label className="flex items-center gap-2 rounded-full input h-[37px] input-bordered bg-slate-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <input
                            type="password"
                            className="grow"
                            placeholder="password"
                          />
                        </label>
                      </div>
                      <div class="pt-6 text-center">
                        <p>
                          <a href="#" class="font-semibold underline text-dark">
                            忘記密碼嗎?
                          </a>
                        </p>
                      </div>
                      <button
                        type="submit"
                        class="w-full px-4 py-2 mt-6
                     text-primary font-semibold
                      border-primary border-2 font-bold 
                      text-center rounded-full transition duration-200 ease-in
                       bg-black  hover:shadow-xl3  focus:outline-none focus:ring-2"
                      >
                        <span class="w-full">登入</span>
                      </button>
                    </form>
                    <div class="pt-6 pb-2 text-center text-slate-300">
                      <p>Or Login With</p>
                    </div>
                    <button
                      type="button"
                      class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      Google
                    </button>
                    <button
                      onClick={toggleHandler}
                      className="w-1/2 px-4 py-2 mx-auto font-bold border-2 rounded-xl mt-14 text-dark btn-primary bg-primary border-dark hover:shadow-xl3 md:hidden"
                    >
                      會員註冊
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* RightSide */}
                <div
                  class={`flex flex-col  w-full md:translate-y-[0%] md:w-1/2 my-10 duration-500 ${
                    loginToggle ? '' : 'translate-x-[0%] md:translate-x-[100%] '
                  } `}
                >
                  <div
                    class={`flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-4 lg:px-8 `}
                  >
                    <p class="text-h3 text-center text-dark font-bold">
                      建立帳戶
                    </p>
                    <form class="flex flex-col pt-4">
                      <div class="flex flex-col">
                        <label className="flex items-center gap-2 h-[37px] rounded-full input input-bordered bg-slate-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                          </svg>
                          <input
                            type="text"
                            className="grow"
                            placeholder="Username"
                          />
                        </label>
                      </div>
                      <div class="flex flex-col pt-3 ">
                        <label className="flex items-center gap-2 rounded-full input h-[37px] input-bordered bg-slate-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                          </svg>
                          <input
                            type="text"
                            className="grow text-slate-700"
                            placeholder="Email"
                          />
                        </label>
                      </div>
                      <div class="flex flex-col pt-3 ">
                        <label className="flex items-center gap-2 rounded-full input h-[37px] input-bordered bg-slate-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <input
                            type="password"
                            className="grow"
                            placeholder="password"
                          />
                        </label>
                      </div>
                      <div class="pt-2 text-center">
                        <p class="font-semibold text-secondary text-[12px]">
                          輸入 8-16 個字元，需包含英文、數字及特殊符號。
                        </p>
                      </div>
                      <button
                        type="submit"
                        class="w-full px-4 py-2 mt-6
                     text-primary font-semibold
                      border-primary border-2 font-bold 
                      text-center rounded-full transition duration-200 ease-in
                       bg-black  hover:shadow-xl3  focus:outline-none focus:ring-2"
                      >
                        <span class="w-full">註冊</span>
                      </button>
                    </form>
                    <div class="pt-6 pb-2 text-center text-slate-300">
                      <p>Or Login With</p>
                    </div>
                    <button
                      type="button"
                      class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      Google
                    </button>
                    <button
                      onClick={toggleHandler}
                      className="w-1/2 px-4 py-2 mx-auto font-bold border-2 rounded-xl mt-14 text-dark btn-primary bg-primary border-dark hover:shadow-xl3 md:hidden"
                    >
                      會員登入
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Slider */}
            <div
              style={{ backgroundImage: 'url(/loginBackground.png)' }}
              class={`${
                loginToggle
                  ? 'duration-500 py-10'
                  : 'translate-x-[-101%] duration-500 py-[88px]'
              } w-1/2 absolute right-0 h-full bg-cover rounded-3xl items-center p-4 text-center hidden md:block z-20 `}
            >
              <div className="flex flex-col items-center justify-center ">
                <div className="font-bold text-h1 text-dark">
                  {`${loginToggle ? 'Hello, Friend!' : '歡迎回來！  '} `}
                </div>
                <div className="px-4 mt-10 font-bold text-h5 text-dark">
                  註冊並開始認識新朋友及使用網站所有功能！
                </div>
                <button
                  onClick={toggleHandler}
                  className="py-2 px-4 font-bold mt-10 max-w-[180px] rounded-xl text-black w-full border-2 rounded-full  md:py-2 btn-primary bg-primary border-dark hover:shadow-xl3"
                >
                  {`${loginToggle ? '會員註冊' : '會員登入'} `}
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
