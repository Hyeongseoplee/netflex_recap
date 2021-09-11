import React from 'react';
import { MovieApi, TVApi } from '../../api';
import DetailPresenter from './DetailPresenter';

export default class DetailContainer extends React.Component {
    constructor(props){
        super(props);
        const { location : { pathname } } = this.props;

        this.state = {
            result : null, // url에 들어온 값이 movie인지 tv인지 구분하고 id 가 무엇이냐에 따라 다른 데이터를 불러와야함
            isMovie : pathname.includes("/movie/"),
            error : null,
            isLoading : false,
        }
    }

        async componentDidMount() {
            const { match : { params : { id }}} = this.props; // url에서 id를 가져온다
            const { history } = this.props;
            const { isMovie } = this.state;
            const parsedId = parseInt(id);
            let result;

            if(isNaN(parsedId)){
                history.push("/");
            }
            this.setState({ isLoading : true});

            try{
                if(isMovie){
                    result = await MovieApi.movieDetail(parsedId);
                }else{
                    result = await TVApi.tvDetail(parsedId);
                }
                this.setState({
                    result,
                })
                // this.setState({
                //     movieSearch,
                //     tvSearch,
                // });
            } catch {
                this.setState({ error : "Ooops!!" })
            } finally {
                this.setState({ isLoading : false })
            }
        }

    render(){
        const { result, error, isLoading } = this.state;
        return (
            <DetailPresenter
                result = { result }
                error = { error }
                isLoading = { isLoading }
            />
        )
    }
}