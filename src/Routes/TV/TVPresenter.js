import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';
import Error from '../../Components/Error';
import Poster from '../../Components/Poster';

const Container = styled.div`
padding : 15px;
`;

const TVPresenter = ({ popular, airingToday, topRated, error, isLoading }) => {
        return isLoading ? <Loader/> :
            <Container>
                {popular && popular.length > 0 && 
                <Section title = "popular">
                    {popular.map(tv => 
                        <Poster
                            key={tv.id} 
                            id={tv.id}
                            imgURL={tv.poster_path}
                            title={tv.name}
                            rating={tv.vote_average}
                            year={tv.first_air_date.substring(0, 4)}
                        />)}
                </Section>}
                {airingToday && airingToday.length > 0 && 
                <Section title = "airingToday">
                    {airingToday.map(tv => <Poster
                        key={tv.id} 
                        id={tv.id}
                        imgURL={tv.poster_path}
                        title={tv.name}
                        rating={tv.vote_average}
                        year={tv.first_air_date.substring(0, 4)}
                    />)}
                </Section>}
                {topRated && topRated.length > 0 && 
                <Section title = "topRated">
                    {topRated.map(tv => <Poster
                        key={tv.id}
                        id={tv.id} 
                        imgURL={tv.poster_path}
                        title={tv.name}
                        rating={tv.vote_average}
                        year={tv.first_air_date.substring(0, 4)}
                    />)}
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