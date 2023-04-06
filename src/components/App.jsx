// import  Home  from "pages/Home";
// import MovieDetails from "pages/MovieDetails";
// import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
// // import Layout from "./Layout/Layout";
// import Cast from "pages/Cast";
// import Review from "pages/Review";

import { lazy } from "react";

const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../pages/Cast"));
const Review = lazy(() => import("../pages/Review"));


export const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="movies" element={<Movies/>} />
            <Route path="movies/:movieId" element={<MovieDetails/>} >
               <Route path="cast" element={<Cast/>} />
               <Route path="reviews" element={<Review/>} />
            </Route>
        </Route>
    </Routes>

  );
};
