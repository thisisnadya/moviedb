import Home from "./Home";
import MovieSeries from "./MovieSeries";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<MovieSeries />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
