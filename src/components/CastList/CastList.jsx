import PropTypes from 'prop-types';

const CastList = ({casts}) => {


    return (<ul>
        {casts.map(({id, profile_path, original_name, name, character }) => {
           return( <li key={id}>
                 <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={original_name || name}
                />
                 <p>{original_name || name}</p>
                 <p>Chatacter: {character}</p>
            </li>)
        })}
    </ul>)
}

export default CastList;

CastList.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      name: PropTypes.string,
      caches: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};