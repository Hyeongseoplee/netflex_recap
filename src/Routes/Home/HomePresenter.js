import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';
import Error from '../../Components/Error';
import Poster from '../../Components/Poster';

const Container = styled.div`
padding : 15px;
`;


const HomePresenter = ({ nowPlaying, upcoming, popular, error, isLoading }) => 
    isLoading ? <Loader/> : 
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
            <Section title = "nowPlaying">
                {nowPlaying.map(movie => 
                    <Poster 
                        key={movie.id}
                        id={movie.id} 
                        imgURL={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                        isMovie={true}
                        />)}
            </Section>
            )}
            {upcoming && upcoming.length > 0 && (
            <Section title = "Upcoming">
                {upcoming.map(movie => 
                    <Poster
                        key={movie.id} 
                        id={movie.id} 
                        imgURL={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                    />)}
            </Section>
            )}
            {popular && popular.length > 0 && (
            <Section title = "popular">
                {popular.map(movie => 
                    <Poster
                        key={movie.id} 
                        id={movie.id} 
                        imgURL={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                    />)}
            </Section>
            )}
            { error && <Error errorMsg = { error } color = "#535c68"/>}
        </Container>;

HomePresenter.prototype = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array,
    popular : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default HomePresenter;