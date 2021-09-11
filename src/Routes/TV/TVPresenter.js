import PropTypes from 'prop-types';

const TVPresenter = ({ popular, airingTiday, topRated, error, isLoading }) => null;

TVPresenter.prototype = {
    popular : PropTypes.array,
    airingTiday : PropTypes.array,
    topRated : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default TVPresenter;