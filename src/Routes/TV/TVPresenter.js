import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';

const Container = styled.div`
padding : 15px;
`;

const TVPresenter = ({ popular, airingToday, topRated, error, isLoading }) => {
        return isLoading ? null :
            <Container>
                <Section title = "popular">
                    {popular.map(movie => movie.name)}
                </Section>
                <Section title = "airingToday">
                    {airingToday.map(movie => movie.name)}
                </Section>
                <Section title = "topRated">
                    {topRated.map(movie => movie.name)}
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