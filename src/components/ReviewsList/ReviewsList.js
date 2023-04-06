import PropTypes from 'prop-types';

const ReviewsList = ({reviews}) => {

return (<ul>
        {reviews.map(({id, author, content }) => {
           return( <li key={id}>
                 <h3>Author: {author}</h3>
                 <p>{content}</p>
            </li>)
        })}
    </ul>)
}

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      author_details: PropTypes.object,
    })
  ).isRequired,
};