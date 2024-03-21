import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/account-center/header";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body >
      <Header className="min-h-screen"/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
