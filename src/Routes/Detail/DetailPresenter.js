import PropTypes from 'prop-types';

const DetailPresenter = ({ result, error, isLoading }) => null;

DetailPresenter.prototype = {
    result : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default DetailPresenter;