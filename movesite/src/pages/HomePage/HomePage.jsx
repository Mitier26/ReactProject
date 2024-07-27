import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMoviesSlide from './components/PopularMoviesSlide/PopularMoviesSlide'

// 1. 베터
// 2. 인기 영화
// 3. 탑 영화
// 4. 영화

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <PopularMoviesSlide/>
    </div>
  )
}

export default HomePage