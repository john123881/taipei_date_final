import React, { Fragment, useState, useEffect } from "react";
import styles from "@/styles/ac-index.module.css";
import Link from "next/link";
import Navbar from "@/components/account-center";


export default function AccountIndex() {

    return (
        <Fragment>
            <div className={styles.container} style={{ height: "1500px" }}>
                <Navbar></Navbar>
                <div >
                    <h1>123</h1>
                </div>
            </div>
        </Fragment>
    );
}
