import CastList from "components/CastList/CastList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastsMovie } from "services/MoviesAPI";

const Cast = () => {
    const [casts, setCasts] = useState([]);
    const params = useParams();


    useEffect(() => {
        getCastsMovie(params.movieId)
            .then(cast => setCasts(cast.cast))
        .catch(error => console.error(error.status_message))
    },[params.movieId])
    


    return (
        <section>
            {casts.length === 0 && <strong>We dont have casts for this movie</strong>}
            {casts.length > 0 && <CastList casts={casts} />}
    </section>
  );

}

export default Cast;