import React, { useState, useEffect } from "react";
import { getDataFromApi } from "../../../utils/getDataFromApi";
import OpenModal from "./OpenModal";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getDataFromApi();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const openModal = (id) => {
    setSelectedMovieId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };

  return (
    <div id="movie-list" className="bg-slate-900">
      <div className="flex flex-wrap max-w-screen-2xl container items-center justify-center w-full">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="cursor-pointer flex-shrink-0 transition-all duration-200 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg"
            onClick={() => openModal(movie.imdbID)} // Membuka modal saat movie diklik
          >
            <div className="group relative m-0 flex h-48 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
                <img
                  src={movie.Poster}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                  alt={`${movie.Title}`}
                />
              </div>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 className="text-2xl font-bold text-white ">
                  {movie.Title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Menampilkan modal jika isModalOpen bernilai true */}
      {isModalOpen && (
        <OpenModal id={selectedMovieId} closeModal={closeModal} />
      )}
    </div>
  );
}
