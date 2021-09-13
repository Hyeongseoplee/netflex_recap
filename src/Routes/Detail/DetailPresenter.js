import PropTypes from 'prop-types';
import { Loader } from '../../Components/Loader';
import styled from 'styled-components';

const Container = styled.div`
    height:calc(100vh - 80px);
    position:relative;
`;

const Backdrop = styled.div`
    background-image: url(${props => props.bgImg});
    background-size: cover;
    bakground-position: center center;
    filter: blur(4px);
    height: 100%;
    width:100%;
    position:absolute;
    left:0;
    top:0;
`;

const DetailPresenter = ({ result, error, isLoading}) =>
    isLoading ? <Loader/> : (
        <Container>
            <Backdrop bgImg = {`https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Backdrop>
        </Container>
    )
;


DetailPresenter.prototype = {
    result : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default DetailPresenter;