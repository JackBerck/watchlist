import React, { useState, useEffect } from "react";
import { getDataFromId } from "../../../utils/getDataFromApi";

export default function OpenModal({ id, closeModal }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getDataFromId(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div
      id="hs-basic-modal"
      className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 start-0 z-[80] opacity-100 overflow-x-hidden transition-all overflow-y-auto pointer-events-auto"
      role="dialog"
      tabIndex="-1"
      aria-labelledby="hs-basic-modal-label"
    >
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3
              id="hs-basic-modal-label"
              className="font-bold text-gray-800 dark:text-white"
            >
              {movie.Title}
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-1 text-gray-800 dark:text-neutral-400">
              {movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
