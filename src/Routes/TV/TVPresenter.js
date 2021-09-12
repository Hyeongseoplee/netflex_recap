import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';
import Error from '../../Components/Error';


const Container = styled.div`
padding : 15px;
`;

const TVPresenter = ({ popular, airingToday, topRated, error, isLoading }) => {
        return isLoading ? <Loader/> :
            <Container>
                {popular && popular.length > 0 && 
                <Section title = "popular">
                    {popular.map(movie => <div key = {movie.id}>{movie.name}</div>)}
                </Section>}
                {airingToday && airingToday.length > 0 && 
                <Section title = "airingToday">
                    {airingToday.map(movie => <div key = {movie.id}>{movie.name}</div>)}
                </Section>}
                {topRated && topRated.length > 0 && 
                <Section title = "topRated">
                    {topRated.map(movie => <div key = {movie.id}>{movie.name}</div>)}
                </Section>}
                { error && <Error errorMsg = { error } color = "#535c68"/>}
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