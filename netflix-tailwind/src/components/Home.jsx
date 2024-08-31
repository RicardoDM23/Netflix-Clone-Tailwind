import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import MovieCarousel from './MovieCarousel';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    fetchMovies("popular", setPopularMovies);
    fetchMovies("action", setActionMovies);
    fetchMovies("adventure", setAdventureMovies);
  }, []);

  const fetchMovies = async (category, setState) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=bbaa47e1396f61194d972f3b6db697d4&with_genres=${getGenreId(category)}&page=1`
      );
      const data = await response.json();
      setState(data.results.slice(0, 25));
    } catch (error) {
      console.error(`Failed to fetch ${category} movies:`, error);
    }
  };

  const getGenreId = (category) => {
    const genres = {
      popular: "",
      action: "28",
      adventure: "12",
    };
    return genres[category];
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="bg-black min-h-screen text-white pt-20">
        <main className="p-4 space-y-12">
          <MovieCarousel title="Populares" movies={popularMovies} />
          <MovieCarousel title="Filmes de Ação" movies={actionMovies} />
          <MovieCarousel title="Filmes de Aventura" movies={adventureMovies} />
        </main>
        <footer className="bg-gray-900 p-6 mt-12">
          <div className="flex justify-around">
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <p>About Us</p>
              <p>Careers</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social</h4>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Legal</h4>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
