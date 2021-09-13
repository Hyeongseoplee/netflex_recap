import PropTypes from 'prop-types';
import styled from 'styled-components';
import Error from '../../Components/Error';
import { Loader } from '../../Components/Loader';
import Section from '../../Components/Section';
import NotFoundMsg from '../../Components/NotFoundMsg';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding : 10px 20px;
`;

const Form = styled.form`
    width:100%;
    margin-bottom : 50px;
    border-bottom : 2px solid black;
    box-shadow:2px 2px 5px black;
    border-radius: 4px;
`;

const Input = styled.input`
    all : unset;
    width:100%;
    font-size:28px;
    padding : 8px 15px;
`;

const SearchPresenter = ({ 
        movieSearch, 
        tvSearch,
        searchTerm, 
        error, 
        isLoading, 
        handleSubmit,
        updateTerm }) => 
        <Container>
            <Form onSubmit= { handleSubmit }>
                <Input 
                    value = { searchTerm }
                    onChange = { updateTerm }
                    placeholder="Search Movie or TV ..."
                    >
                </Input>
                </Form>
                {isLoading ? <Loader/> : (
                    <>
                    {movieSearch && movieSearch.length > 0 && 
                        <Section title = "Movies Result">
                            {movieSearch.map(movie => 
                                <Poster
                                    key={movie.id}
                                    id={movie.id} 
                                    imgURL={movie.poster_path}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />)}
                        </Section>}
                    {tvSearch && tvSearch.length > 0 && 
                        <Section title = "Tv Result">
                            {tvSearch.map(tv => 
                                <Poster
                                key={tv.id} 
                                id={tv.id}
                                imgURL={tv.poster_path}
                                title={tv.name}
                                rating={tv.vote_average}
                                year={tv.first_air_date && tv.first_air_date.substring(0,4)}
                            />
                            )}</Section>}
                    </>
                )
                    }
                { error && <Error errorMsg = { error } color = "#535c68"/>}
                { movieSearch && tvSearch && movieSearch.length === 0 && tvSearch.length === 0 && <NotFoundMsg text={"Nothing found.."} color="#535c68"/>} 
                {/* movieSearch와 tvSearch 가 true 라는 걸 확인해야 하는 이유는? */}
        </Container>;


SearchPresenter.prototype = {
    movieSearch : PropTypes.array,
    tvSearch : PropTypes.array,
    searchTerm : PropTypes.string,
    handleSubmit : PropTypes.func,
    updateTerm : PropTypes.func,
    error : PropTypes.string,
    isLoading : PropTypes.bool.isRequired,
}

export default SearchPresenter;