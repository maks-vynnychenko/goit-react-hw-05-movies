import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import appStyle from'./App.module.css' 

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));



export const App = () => {
  return (
    <>
      <header className={appStyle.header}>
        <nav className={appStyle.nav}>
          <NavLink className={appStyle.navLink} to="/">Home</NavLink>
          <NavLink className={appStyle.navLink} to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};