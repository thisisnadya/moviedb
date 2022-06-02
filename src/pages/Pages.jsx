import Home from "./Home";
import MovieSeries from "./MovieSeries";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Detail from "./Detail";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<MovieSeries />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default Pages;
