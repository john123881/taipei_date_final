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
                <div className={styles.navbar}>
                    <Link href="#" className={styles.navbarLogo}>
                        <div className={styles.navbarLogoLeft}>TAIPEI</div>
                        <div className={styles.navbarLogoRight}>DATE</div>
                    </Link>
                    <div>
                        <ul className={styles.middleListItem}>
                            <li>
                                <Link href="#">配對交友</Link>
                            </li>
                            <li>
                                <Link href="#">社群媒體</Link>
                            </li>
                            <li>
                                <Link href="#">行程規劃</Link>
                            </li>
                            <li>
                                <Link href="#">酒吧探索</Link>
                            </li>
                            <li>
                                <Link href="#">電影探索</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.rightListItem}>
                            <li>
                                <Link href="#">
                                    <FaBookmark />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <MdAccountCircle />
                                </Link>
                            </li>
                            <li>
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
