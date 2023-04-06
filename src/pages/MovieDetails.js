import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getDetailsMovie } from "services/MoviesAPI";
import { BoxAdditionalInfomation, BoxMovieDetails, DescriptionList, BackBtn, Image, MovieDetailsContainer } from "./MovieDetails.syled";


const MovieDetails = () => {
    const [film, setFilm] = useState('');
    const params = useParams();
    const location = useLocation();
    const back = location.state?.from;
    
    useEffect(() => {
        getDetailsMovie(params.movieId)
            .then(film => setFilm(film))
            .catch(err => console.error(err))
    }, [params])

    const genre = film.genres && film.genres.map(genre => genre.name).join(',');

    return (
        <MovieDetailsContainer>
            <BackBtn to={back}>Go back</BackBtn>
            <BoxMovieDetails>
                <Image src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.original_title} />
            <DescriptionList>
                <li>
                    <h1>{film.original_title}</h1>
                    <p>{film.release_date}</p>
                </li>
                <li>
                    <p>User score: {film.vote_count / 100}%</p>
                </li>
                <li>
                    <h2>Overview</h2>
                    <p>{film.overview}</p>
                </li>
                <li>
                    <h3>Genres</h3>
                    <p>{genre}</p>
                </li>
            </DescriptionList>
            </BoxMovieDetails>
            
            <BoxAdditionalInfomation>
                <h4>Additional information</h4>
            <ul>
                <li><Link to={'cast'} state={{ from: back }}>Casts</Link></li>
                <li><Link to={'reviews'} state={{ from: back }}> Reviews </Link></li>
            </ul>
            </BoxAdditionalInfomation>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
            
        </MovieDetailsContainer>
    )
}

export default MovieDetails;