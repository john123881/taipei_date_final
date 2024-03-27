import Image from 'next/image';
import Head from 'next/head';
import DateCard from '@/components/index/date_card';
import ThemeCard from '@/components/index/theme_card';
import RegisterAcc from '@/components/index/register_acc';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* <Account /> */}
        <RegisterAcc />
        {/* Data */}
        <div class="carousel carousel-center rounded-box max-w-full overflow-x-auto scrollbar-hide">
          <div class="carousel-item p-4">
            <DateCard />
          </div>
          <div class="carousel-item p-4">
            <DateCard />
          </div>
          <div class="carousel-item p-4">
            <DateCard />
          </div>
        </div>
        <Link href="/date">
          <button className="w-40 py-1 mt-5 mb-20 border-2 rounded-full md:w-60 md:py-2 btn-primary bg-primary border-primary">
            開始配對
          </button>
        </Link>

        {/* Other Theme */}

        <div class="carousel carousel-center rounded-box w-full overflow-x-auto scrollbar-hide gap-14 object-center">
          <div class="carousel-item px-4 ">
            <ThemeCard
              paragraphText="我以為我了解網站，但我真的了解網站嗎？仔細想想，我對網站的理解只是皮毛而已。網站的出現，必將帶領人類走向更高的巔峰。"
              buttonText="我要看電影"
              link="/"
            />
          </div>
          <div class="carousel-item px-4">
            <ThemeCard
              paragraphText="我以為我了解網站，但我真的了解網站嗎？仔細想想，我對網站的理解只是皮毛而已。網站的出現，必將帶領人類走向更高的巔峰。"
              buttonText="我要看電影"
              link="/"
            />
          </div>
          <div class="carousel-item px-4">
            <ThemeCard
              paragraphText="我以為我了解網站，但我真的了解網站嗎？仔細想想，我對網站的理解只是皮毛而已。網站的出現，必將帶領人類走向更高的巔峰。"
              buttonText="我要看電影"
              link="/"
            />
          </div>
          <div class="carousel-item px-4">
            <ThemeCard
              paragraphText="我以為我了解網站，但我真的了解網站嗎？仔細想想，我對網站的理解只是皮毛而已。網站的出現，必將帶領人類走向更高的巔峰。"
              buttonText="我要看電影"
              link="/"
            />
          </div>
        </div>
      </div>
    </>
  );
}
