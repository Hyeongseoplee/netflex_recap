import PropTypes from 'prop-types';
import { Loader } from '../../Components/Loader';
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:calc(100vh - 80px);
    position:relative;
    box-sizing: border-box;
    padding:50px;
`;

const Backdrop = styled.div`
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center center;
    filter: blur(2px) brightness(0.2);
    height: 100%;
    width:100%;
    position:absolute;
    left:0;
    top:0;
`;

const Content = styled.div`
    display: flex;
    width:100%;
    height:100%;
    position:relative;
    z-index:100;
`;

const Cover = styled.div`
    width:30%;
    height:100%;
    background-image : url(${props => props.posterImg});
    background-position: center center ;
    background-size: cover ;
    border-radius:2px;
    box-shadow:3px 3px 10px black;
`;

const Data = styled.div`
    width:70%;
    margin-left:20px;
    border-radius: 2px;
`;

const Title = styled.div`
font-size:22px;
font-weight:600;
`;

const MetaInfo = styled.div`
    margin:14px 0;
    font-size:14px;
`;

const Year = styled.span`

`;

const Divider = styled.span`
    margin: 0 10px;
`;

const RunTime = styled.span`

`;

const Genres = styled.span`
    list-style:none;
    color:#44bd32;
`;

const Overview = styled.p`
    font-size:16px;
    line-height:20px;
    margin-top:40px;
    opacity:0.7;
`;


const DetailPresenter = ({ result, error, isLoading}) =>
    isLoading ? <Loader/> : (
        <Container>
            <Backdrop bgImg = {`https://image.tmdb.org/t/p/original${result.backdrop_path}`}>
            </Backdrop>
                <Content>
                    <Cover posterImg = { result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require('../../assets/noPosterSmall.png').default}></Cover>
                    <Data>
                        <Title>{result.original_title ? result.original_title : result.name}</Title>
                        <MetaInfo>
                            <Year>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Year>
                            <Divider>∙</Divider>
                            <RunTime>{result.runtime ? result.runtime : result.episode_run_time}min</RunTime>
                            <Divider>∙</Divider>
                            <Genres>{result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name}/`)}</Genres>
                            {/* 마지막 장르 item 에 "/" 빼는거 이해 x */}
                        </MetaInfo>
                        <Overview>{result.overview}</Overview>
                    </Data>
                </Content>
        </Container>
    )
;


DetailPresenter.prototype = {
    result : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default DetailPresenter;