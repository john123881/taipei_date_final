import React from "react";
import Headroom from "react-headroom";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { RxBell } from "react-icons/rx";
import styles from '@/styles/navbar.module.css';


export default function Navbar() {
    return (
        <>
            <Headroom>
                <div className='bg-black flex justify-between items-center py-8 px-14'>
                    <Link href="#" className={styles.navbarLogo}>
                        <div className={styles.navbarLogoLeft}>TAIPEI</div>
                        <div className={styles.navbarLogoRight}>DATE</div>
                    </Link>
                    <div>
                        <ul className='flex flex-row pr-14'>
                            <li className=" pr-14 text-white">
                                <Link href="#">配對交友</Link>
                            </li>
                            <li  className=" pr-14 text-white">
                                <Link href="#">社群媒體</Link>
                            </li>
                            <li className=" pr-14 text-white">
                                <Link href="#">行程規劃</Link>
                            </li>
                            <li className=" pr-14 text-white">
                                <Link href="#">酒吧探索</Link>
                            </li>
                            <li className=" text-white">
                                <Link href="#">電影探索</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.rightListItem}>
                            <li  className="text-white">
                                <Link href="#">
                                    <FaBookmark />
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link href="#">
                                    <MdAccountCircle />
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link href="#">
                                    <RxBell />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Headroom>
        </>
    );
}
