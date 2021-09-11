import PropTypes from 'prop-types';

const HomePresenter = ({ nowPlaying, upcoming, popular, error, isLoading }) => null;

HomePresenter.prototype = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array,
    popular : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default HomePresenter;