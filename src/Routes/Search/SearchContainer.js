import { useEffect, useState } from 'react';
import SearchPresenter from './SearchPresenter';
import { MovieApi } from '../../api';


export default function SearchContainer() {
    const [ result, setResult ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const term = "hello";

    

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const { data : { results : movieSearch}} = await MovieApi.movieSearch(term);
                setResult(movieSearch);
            } catch {
                setError("Failed");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[])
    console.log(result)

    return (
        <SearchPresenter/>
    )
} 