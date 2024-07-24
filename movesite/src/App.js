import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// 홈페이지. /
// 영화 전체를 보여주는 페이지. /movies
// 영화 디테일 페이지. /movies/:id

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        {/*여기 안에 있는 것은 전부 AppLayout를 받는다.*/}
        {/* index == path="/" */}
        <Route index element={<HomePage />} />
        {/* 
        <Route path='/movies' element={<MoviePage />} />
        <Route path='movies/:id' element={<MovieDetailPage />} /> 
        */}

        <Route path='movies'>
          <Route index element={<MoviePage />} />
          <Route path=':id' element={<MovieDetailPage />} />
        </Route>

        {/* 위에 있는 페이지 외의 모든 페이지 */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
