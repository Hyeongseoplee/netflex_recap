import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';

const Container = styled.div`
padding : 15px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, isLoading }) => 
    isLoading ? null : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
            <Section title = "nowPlaying">
                {nowPlaying.map(movie => movie.title)}
            </Section>
            )}
            
            {upcoming && upcoming.length > 0 && (

            <Section title = "Upcoming">
                {upcoming.map(movie => movie.title)}
            </Section>

            )}

            {popular && popular.length > 0 && (

            <Section title = "popular">
                {popular.map(movie => movie.title)}
            </Section>

            )}
        </Container>
    );

HomePresenter.prototype = {
    nowPlaying : PropTypes.array,
    upcoming : PropTypes.array,
    popular : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default HomePresenter;