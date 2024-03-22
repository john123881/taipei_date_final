import "@/styles/globals.css";
import * as React from "react";
import Head from "next/head";

import Header from "@/components/account-center/header/header";

export default function App({ Component, pageProps }) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <main className="dark text-foreground bg-background ">

            <Header />
            <Component {...pageProps} />
        </main>
    );
}
