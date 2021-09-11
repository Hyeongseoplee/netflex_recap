import React from 'react';
import TVPresenter from './TVPresenter';
import { TVApi } from '../../api';

export default class TVContainer extends React.Component {
    state = {
        popular : null,
        airingToday : null,
        topRated : null,
        error : null,
        isLoading : true
    }
    
    async componentDidMount(){
        try{
            const { data : { results : popular }} = await TVApi.popular();
            const { data : { results : airingToday }} = await TVApi.airingToday();
            const { data : { results : topRated }} = await TVApi.topRated();
            this.setState({
                popular,
                airingToday,
                topRated,
            })
        }catch{
            this.setState({
                error : "Sorry, Cannot find Tv shows :("
            })
        }finally{
            this.setState({
                isLoading : false
            })
        }
    }

    render() {
        const { popular, airingToday, topRated, error, isLoading } = this.state;
        return (
            <TVPresenter
            popular = { popular }
            airingToday = { airingToday }
            topRated = { topRated }
            error = { error }
            isLoading = { isLoading }/>
        )
    }

}