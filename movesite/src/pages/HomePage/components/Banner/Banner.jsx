import React from 'react'
import { usePopularMoviesQuery } from '../../../../Hooks/usePopularMovies'

const Banner = () => {

    const {data} = usePopularMoviesQuery()

  return (
    <div>Banner</div>
  )
}

export default Banner