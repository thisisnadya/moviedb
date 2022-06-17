import Home from "./Home";
import MovieSeries from "./MovieSeries";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Detail from "./Detail";
import ShowByGenres from "./ShowByGenres";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<MovieSeries />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/:media_type/detail/:id" element={<Detail />} />
      <Route path="/category/:type/genres/:id" element={<ShowByGenres />} />
    </Routes>
  );
}

export default Pages;
