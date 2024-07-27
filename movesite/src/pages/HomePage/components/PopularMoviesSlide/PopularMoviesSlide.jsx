import React from 'react'
import { usePopularMoviesQuery } from '../../../../Hooks/usePopularMovies'
import {Alert} from "react-bootstrap"
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';


const PopularMoviesSlide = () => {

    const {data, isLoading, isError, error} = usePopularMoviesQuery();

    if(isLoading) {
        return <h1>로딩중.....</h1>
    }

    if(isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider title='Popular Movies' movies={data.results} responsive={responsive} />
        </div>
    )
}

export default PopularMoviesSlide