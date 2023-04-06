import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/MoviesAPI';

const Home = () => {
     
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies(movies)
            .then(movies => setMovies(movies.results))
            .catch(error => console.error(error.status_message))
    }, [movies])

     const location = useLocation();

    return (
    <main>
            <h1>Trending today Movies</h1> 
            <ul>{movies.map(movie => {
                return (
                 <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>
                )
            })}
            </ul>
            
    </main>
)
}
export default Home;