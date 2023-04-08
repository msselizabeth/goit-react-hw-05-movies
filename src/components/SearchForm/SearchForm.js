import { PropTypes } from 'prop-types';

const SearchForm = ({handleMovieSubmit}) => {

    return (
        <form onSubmit={handleMovieSubmit}>
            <input type="text" name="query"/>
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchForm;

SearchForm.propTypes = {
  handleMovieSubmit: PropTypes.func.isRequired,
};