import "@/styles/globals.css";
import * as React from "react";
// 1. import `NextUIProvider` component
import { NextUIProvider} from "@nextui-org/react";
// import '@/nextui.config'; // 引入自定义主题文件



export default function App({ Component, pageProps }) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <main className="dark text-foreground bg-background ">
                <Component {...pageProps} />
            </main>
        </NextUIProvider>
    );
}
