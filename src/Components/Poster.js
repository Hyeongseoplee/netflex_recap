import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SLink = styled(Link)`
    list-style:none;
    text-decoration:none;
`;

const Container = styled.div`
    height: 200px;
`;

const PosterImg = styled.div`
    background-image: url(${props => props.imgURL});
    height:180px;
    background-size : cover;
    background-position: center center;
    transition : opacity .1s linear;
    border-radius: 4px;
`;

const Rating = styled.span`
    font-size: 16px;
    position:absolute;
    bottom:10px;
    right:4px;
    opacity:0;
`;

const ImageContainer = styled.div`
    margin-bottom:6px;
    &:hover {
        ${PosterImg} {
        opacity:0.3;
        }
        ${Rating} {
        opacity:1;
        }}
    position:relative;
`;

const Title = styled.span`
    padding:10px 0;
    font-size: 10px;
    font-weight: 600;
`;

const Year = styled.span`
    display:inline-block;
    margin-top:4px;
    font-size:8px;
`;


export default function Poster({ id, imgURL, title, rating, year, isMovie = false}) {
    return (
        <SLink to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
                <ImageContainer>
                    <PosterImg imgURL = {imgURL ? `https://image.tmdb.org/t/p/w300/${imgURL}` : require('../assets/noPosterSmall.png').default}></PosterImg>
                    <Rating>
                        <span role="img" aria-label="rating">⭐️</span>                    
                        {" "} {rating}/10</Rating>
                </ImageContainer>
                <Title>{ title.length > 16 ? `${title.substring(0,16)}...` : title}</Title><br/>
                <Year>{year}</Year>
                </Container>        
        </SLink>
    )
}

Poster.prototype = {
    id : PropTypes.number.isRequired,
    imgURL : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    rating : PropTypes.string,
    year : PropTypes.string,
    isMovie : PropTypes.bool.isRequired,
}