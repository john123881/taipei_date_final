import React from "react";
import { FaBookmark } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { RxBell } from "react-icons/rx";

export default function AccountIndex() {
    return (
        <>
            <div>logo</div>
            <div className="navbar">
                <ul>
                    <li>配對交友</li>
                    <li>社群媒體</li>
                    <li>行程規劃</li>
                    <li>酒吧探索</li>
                    <li>電影探索</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <FaBookmark />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MdAccountCircle />
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#">
                            <RxBell />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
