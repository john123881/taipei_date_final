import "@/styles/globals.css";
import * as React from "react";



export default function App({ Component, pageProps }) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
            <main className="dark text-foreground bg-background ">
                <Component {...pageProps} />
            </main>

    );
}
