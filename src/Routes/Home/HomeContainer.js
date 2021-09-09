import React from 'react';
import HomePresenter from './HomePresenter';
import { MovieApi } from '../../api';

export default class HomeContainer extends React.Component{
    state = {
        nowPlaying : null,
        upcoming : null,
        popular : null,
        error : null,
        isLoading : true,
    }

    async componentDidMount(){
        try{
            const {data : { results : nowPlaying }} = await MovieApi.nowPlaying();
            const {data : { results : upcoming }} = await MovieApi.upcoming();
            const {data : { results : popular }} = await MovieApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular,
            })
        }catch{
            this.setState({ error : "Sorry, Cannot find movies :("})
        }finally{
            this.setState({
                isLoading : false
            })
        }
    }

    render(){
        const { nowPlaying, upcoming, popular, error, isLoading } = this.state;
        console.log(this.state)

        return (
            <HomePresenter 
            nowPlaying = { nowPlaying }
            upcoming = { upcoming }
            popular = { popular }
            error = { error }
            isLoading = { isLoading }/>
        )
    }
    }