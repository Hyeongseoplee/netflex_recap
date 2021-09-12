import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';
import Section from '../../Components/Section';

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
                    {movieSearch && movieSearch.length > 0 && <Section title = "Movies Result">{movieSearch.map(movie => <div key={movie.key}>{movie.title}</div>)}</Section>}
                    {tvSearch && tvSearch.length > 0 && <Section title = "Tv Result">{tvSearch.map(movie => <div key={movie.key}>{movie.name}</div>)}</Section>}
                    </>
                )
                    }
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