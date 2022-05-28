import Home from "./Home";
import MovieSeries from "./MovieSeries";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<MovieSeries />} />
    </Routes>
  );
}

export default Pages;
