import React from "react";

export default function Hero() {
  return (
    <div
      id="about-us"
      className="flex flex-col items-center justify-center px-4 pt-24 mx-auto lg:pt-32 md:px-8 bg-[url('img/banner.png')]"
    >
      <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl">
        <div>
          <h1 className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-slate-200 uppercase rounded-full bg-red-600">
            WatchList
          </h1>
        </div>
        <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-slate-200 sm:text-4xl md:mx-auto">
          Discover and track your favorite movies and TV shows effortlessly.
        </h2>
        <p className="text-base text-slate-200 md:text-lg">
          WatchList is a platform that allows you to discover new movies and TV
          shows, share your opinions, and create your wishlist.
        </p>
      </div>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16 max-w-screen-md">
        <input
          placeholder="Search for movies and TV shows..."
          type="text"
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-red-700 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-700 hover:bg-red-900 focus:shadow-outline focus:outline-none"
        >
          Search
        </button>
      </form>
      <p className="max-w-md mb-10 text-xs text-slate-500 sm:text-sm md:text-center">
        Discover new movies, share your opinions, and create your wishlist.
      </p>
    </div>
  );
}
