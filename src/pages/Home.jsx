import MovieCard from "../components/MovieCard.jsx";
import { getMovies } from "../services/api.js";
import { useState, useEffect } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const GhibliMovies = await getMovies();
        setMovies(GhibliMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    setSubmittedQuery(searchQuery);
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(submittedQuery.trim().toLowerCase())
  );

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
