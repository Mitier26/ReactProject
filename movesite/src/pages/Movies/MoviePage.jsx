import React from 'react'
import { useSearchMovieQuery } from '../../Hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/MovieCard/MovieCard';


// 2가지 방법으로 접속 가능
// nav바에서 클릭해서 접속
// 검색을 해서 접속
const MoviePage = () => {

  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword})

  if(isLoading) {
    return (
      <h1>로딩중....</h1>
    )
  }

  if(isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index)=>
            <Col key={index} lg={4} xs={12}>
              <MovieCard movie={movie}/>
            </Col>)}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage