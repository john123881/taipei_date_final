import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "@/components/account-center/sidebar";
import Link from "next/link";
import { BsList } from "react-icons/bs";

export default function AccountIndex() {
    return (
        <>
            <div className="flex min-h-screen bg-dark ">
                <div class="z-40 sm:block">
                    <Sidebar />
                </div>
                <div class="w-screen px-4 sm:px-6 md:px-8 lg:ps-14 lg:pe-44 xl:pe-60 py-12">
                    <div className="flex flex-col w-full ">
                        {/* 小漢堡START */}
                        <div className="flex align-middle border-b border-solid menu-title ps-0">
                            <div className="flex items-center drawer-content sm:hidden">
                                <label
                                    htmlFor="my-drawer-2"
                                    className="drawer-button lg:hidden"
                                >
                                    <BsList className="text-2xl" />
                                </label>
                            </div>
                            <div className="text-2xl text-light ms-3">
                                基本資料
                            </div>
                        </div>
                        {/* 小漢堡END */}

                        {/* CONTENT1 START */}
                        <div className="flex flex-col h-full mt-6 lg:mx-1 xl:mx-12 lg:flex-row card bg-base-300 rounded-box place-items-center">
                            <div className="justify-center avatar basis-1/2">
                                <div className="w-48 mx-4 my-4 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="container basis-1/2">
                                <div className="flex flex-row justify-center mx-4 lg:justify-start my-7">
                                    <p className="me-4">電子郵件：</p>
                                    <span>XXX@gamil.com</span>
                                </div>
                                <div className="flex flex-row justify-center mx-4 lg:justify-start mb-7">
                                    <p className="me-4">電子郵件：</p>
                                    <span>XXX@gamil.com</span>
                                </div>
                                <div className="flex flex-row justify-center mx-4 lg:justify-start mb-7">
                                    <p className="me-4">電子郵件：</p>
                                    <span>XXX@gamil.com</span>
                                </div>
                                <div className="flex flex-row justify-center mx-4 lg:justify-start mb-7">
                                    <p className="me-4">電子郵件：</p>
                                    <span>XXX@gamil.com</span>
                                </div>
                                <div className="flex flex-row justify-center mx-4 lg:justify-start mb-7">
                                    <p className="me-4">電子郵件：</p>
                                    <span>XXX@gamil.com</span>
                                </div>
                                <div className="flex flex-row justify-center mx-4 lg:justify-start mb-7">
                                    <p className="me-4">電子郵件：</p>
                                    <span>XXX@gamil.com</span>
                                </div>
                            </div>
                        </div>
                        {/* CONTENT1 END */}

                        <div className="divider"></div>
                        {/* CONTENT2 START */}
                        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                            content2
                        </div>
                        {/* CONTENT2 END */}
                    </div>
                </div>
            </div>
        </>
    );
}
