import React from 'react';
import SearchPresenter from './SearchPresenter';
import { MovieApi, TVApi } from '../../api';

export default class SearchContainer extends React.Component{
    state = {
            movieSearch : null,
            tvSearch : null,
            searchTerm : "",
            error : null,
            isLoading : false,
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.fetchSearchDatas();
    }
}

    fetchSearchDatas = async () => { 
        const { searchTerm } = this.state;
        this.setState({ isLoading : true});
        try {
            const { data : { results : movieSearch }} = await MovieApi.movieSearch(searchTerm);
            const { data : { results : tvSearch }} = await TVApi.tvSearch(searchTerm);
            this.setState({
                movieSearch,
                tvSearch,
            }
            )
        }catch {
            this.setState({
                error : "Oops!"
            })
        }finally {
            this.setState({
                isLoading : false
            })
        }
    }

    render(){
        const { movieSearch, tvSearch, searchTerm, error, isLoading } = this.state;
        console.log(this.state);
        return (
            <>
            <SearchPresenter
                movieSearch = { movieSearch }
                tvSearch = { tvSearch }
                searchTerm = { searchTerm }
                error = { error }
                isLoading = { isLoading }
                handleSubmit = { this.handleSubmit }/>
            </>
        )
    } 
} 
