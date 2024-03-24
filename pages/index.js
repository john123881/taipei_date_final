import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center min-h-screen align-middle bg-dark">
        <div className="flex justify-center min-h-screen align-middle">
          {/* <SidebarWithBurgerMenu /> */}
          <Image
            className="relative next-logo"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="flex justify-center mb-20 align-middle">
          <div className="shadow-xl card w-96 bg-base-100">
            <div className="card-body">
              <h2 className="card-title">
                Docs <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
