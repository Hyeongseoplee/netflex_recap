import PropTypes from 'prop-types';

const SearchPresenter = ({ movieSearch, tvSearch, error, isLoading }) => null;

SearchPresenter.prototype = {
    movieSearch : PropTypes.array,
    tvSearch : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default SearchPresenter;