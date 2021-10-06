import { useRef } from "react";
import Link from "next/link";
import style from "./Hero.module.css";

export default function Hero() {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <section className={style.heroBackground}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Mari Berbagi
            <br />
            Berbagi Kisah Perjalanan
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100 md:w-3/4 lg:w-1/2">
            Karena perjalan terbaik selalu punya hak untuk dibagikan. Agar
            meraka yang lain juga bisa merasa indahnya dunia.
          </p>
          <div className="flex flex-col justify-center ">
            <div className="w-full flex  justify-around">
              <Link href="/destiny/create">
                <a className="inline-flex py-2 px-6 btn-pri">New Destiny</a>
              </Link>
              <Link href="/destiny">
                <a className="inline-flex py-2 px-6 btn-pri">All Destiny</a>
              </Link>
            </div>
            <p className="text-gray-200 font-medium text-md text-center my-2">
              Atau
            </p>
            <form
              onSubmit={() => {}}
              className="flex w-full items-center justify-center p-0 relative mx-auto text-gray-600"
            >
              <input
                className="w-full text-gray-700 bg-gray-200 h-10 px-5 pr-14 rounded-md text-base focus:outline-none"
                type="search"
                name="search"
                ref={searchRef}
                required
                placeholder="Cari Destinasi"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 py-2 px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
