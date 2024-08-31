import React, { useRef } from 'react';

export default function MovieCarousel({ title, movies }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -130, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 130, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="carousel relative">

        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10">
          ‹
        </button>

        {/* Container dos Filmes */}
        <div 
          className="flex overflow-x-scroll space-x-4 scrollbar-hide" 
          ref={carouselRef}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer"
              style={{ minWidth: "130px" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg transition-transform transform group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-2 opacity-0 group-hover:opacity-100 transition-opacity scale-105">
                <h3 className="text-sm font-bold">{movie.title}</h3>
                <p className="text-xs">Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10">
          ›
        </button>
      </div>
    </section>
  );
}
