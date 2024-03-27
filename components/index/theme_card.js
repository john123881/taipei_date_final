import React from 'react';
import Link from 'next/link';

export default function ThemeCard({ paragraphText, buttonText, link }) {
  return (
    <>
      <div className="card card-compact max-w-[500px] h-[400px] m-2 border border-1 border-white shadow-xl mb-2 overflow-hidden flex ">
        <figure className="max-w-[500px] h-[300px]">
          <img
            src="/theme.jpg"
            alt="主題"
            className="object-cover object-center"
          />
        </figure>
        <div className="card-body h-auto w-full p-0 flex items-center max-w-[500px]">
          <p className="text-center">{paragraphText}</p>
          <div className="card-actions justify-center">
            <Link href={link}>
              <button className="w-40 py-1 my-2 md:w-60 md:py-2 bg-black border-2 border-primary rounded-full ">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
