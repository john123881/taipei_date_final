import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "@/components/account-center/sidebar/sidebar";
import Link from "next/link";
import { BsList, BsEmojiHeartEyes } from "react-icons/bs";
import PageTitle from "@/components/page-title";
import Breadcrumbs from "@/components/account-center/breadcrumbs/breadcrumbs";
import Burgermenu from "@/components/account-center/burgermenu/burgermenu";

export default function AccountEdit() {
    const [pageTitle, setPageTitle] = useState("會員中心");
    const [currentPage, setCurrentPage] = useState("資料編輯");
    const [username, setUsername] = useState("小明");
    const [userGender, setUserGender] = useState("男");
    const [userPhone, setUserPhone] = useState("0912345678");
    const [userBirthday, setUserBirthday] = useState("2000-01-01");

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

    const missionFinish = true;
    // const missionFinish = false
    return (
        <>
            <PageTitle pageTitle={pageTitle} />
            <div className="flex min-h-screen bg-dark ">
                <div class="z-40 sm:block">
                    <Sidebar />
                </div>
                <div class="w-screen px-4 sm:px-6 md:px-8 lg:ps-14 lg:pe-44 xl:pe-60 py-12">
                    <div className="flex flex-col w-full ">
                        <div className="flex align-middle border-b border-solid menu-title ps-0">
                            {/* 小漢堡START */}
                            <Burgermenu />
                            {/* 小漢堡END */}
                            <div className="text-2xl text-light ms-3">
                                {currentPage}
                            </div>
                        </div>

                        <div className="text-sm breadcrumbs ms-2">
                            <Breadcrumbs currentPage={currentPage} />
                        </div>

                        {/* CONTENT1 START */}
                        <form>
                            <div className="flex flex-col h-full lg:mx-1 xl:mx-1 2xl:mx-12 lg:flex-row card bg-base-300 rounded-box place-items-center">
                                <div className="justify-center avatar basis-1/2">
                                    <div className="w-48 mx-4 my-4 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="container basis-1/2">
                                    <div className="flex flex-row items-center justify-center mx-4 lg:justify-start my-7">
                                        <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3">
                                            電子郵件：
                                        </p>
                                        <input
                                            type="mail"
                                            placeholder="Type here"
                                            value={"XXX@gamil.com"}
                                            readOnly
                                            className="max-w-xs basis-1/2 lg:basis-2/3 input-sm input input-bordered"
                                        />
                                    </div>
                                    <div className="flex flex-row items-center justify-center mx-4 mb-7">
                                        <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3">
                                            使用者名稱：
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
                                        <p className="text-center ms-2 basis-1/2 lg:ms-0 lg:basis-1/3">
                                            生日：
                                        </p>
                                        <input
                                            type="date"
                                            value={userBirthday}
                                            onChange={handleUserBirthdayChange}
                                            className="max-w-xs basis-1/2 lg:basis-2/3 input-sm input input-bordered"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* CONTENT1 END */}

                            <div className="divider"></div>

                            {/* CONTENT2 START */}
                            <div className="flex flex-col justify-start h-full mb-20 lg:mx-1 xl:mx-1 2xl:mx-12 bg-base-300 rounded-box">
                                <div className="mt-4 text-xl ms-2 text-light menu-title">
                                    關於我：
                                </div>
                                <div className="flex justify-center mx-4 mt-4 mb-8 md:mx-12 2xl:mx-16 md:flex-row">
                                    <textarea
                                        placeholder="輸入些甚麼..."
                                        className="w-full h-48 max-w-4xl textarea textarea-bordered textarea-lg text-slate-900"
                                    >
                                        你好，我是小明，平常我喜歡去酒吧放鬆，有空也喜歡去看電影，很高興認識妳！
                                    </textarea>
                                </div>
                            </div>
                            {/* CONTENT2 END */}
                            <button></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
