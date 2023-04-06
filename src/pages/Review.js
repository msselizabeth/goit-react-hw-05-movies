const { default: ReviewsList } = require("components/ReviewsList/ReviewsList");
const { useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");
const { getReviewsMovie } = require("services/MoviesAPI");

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const params = useParams();


    useEffect(() => {
        getReviewsMovie(params.movieId)
            .then(review => setReviews(review.results))
        .catch(error => console.error(error.status_message))
    },[params.movieId])

    return (
    <section>
      {reviews.length === 0 && (
        <strong>We dont have any reviews for this movie</strong>
      )}
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
    </section>
  );
}

export default Review;