import MoviesList from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "services/MoviesAPI";

const Movies = () => {
    
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') ?? '';

    useEffect(() => {
        if (searchQuery === '')
        {
            return;
        }
        getSearchMovie(searchQuery)
            .then(movies => movies && setMovies(movies.results))
            .catch(error => console.error(error.status_message));
    
    }, [searchQuery])
    
    const handleMovieSubmit = e => {
           e.preventDefault();
           const query = e.currentTarget.query.value;

        if (query.trim() === '') {
        return setSearchParams({});
        }

           setSearchParams({ query });
  };
    
    return (
        <section>
            <SearchForm handleMovieSubmit={handleMovieSubmit} />
            {searchQuery && <MoviesList movies={movies} />}
        </section>
    )
}

export default Movies;