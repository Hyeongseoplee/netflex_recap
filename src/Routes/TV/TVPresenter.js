import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';


const Container = styled.div`
padding : 15px;
`;

const TVPresenter = ({ popular, airingToday, topRated, error, isLoading }) => {
        return isLoading ? <Loader/> :
            <Container>
                <Section title = "popular">
                    {popular.map(movie => <div key = {movie.id}>{movie.name}</div>)}
                </Section>
                <Section title = "airingToday">
                    {airingToday.map(movie => <div key = {movie.id}>{movie.name}</div>)}
                </Section>
                <Section title = "topRated">
                    {topRated.map(movie => <div key = {movie.id}>{movie.name}</div>)}
                </Section>
            </Container>

};

TVPresenter.prototype = {
    popular : PropTypes.array,
    airingTiday : PropTypes.array,
    topRated : PropTypes.array,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default TVPresenter;