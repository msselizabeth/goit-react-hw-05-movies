import { PropTypes } from 'prop-types';

const SearchForm = () => {

    return (
        <form>
            <input type="text" name="query"/>
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchForm;

SearchForm.propTypes = {
  handleMovieSubmit: PropTypes.func.isRequired,
};