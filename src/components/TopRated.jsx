import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    getTopRated();
  }, []);
  const getTopRated = async () => {
    const check = localStorage.getItem("top_rated");

    if (check) {
      setTopRated(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await data.json();
      localStorage.setItem("top_rated", JSON.stringify(result.results));
      setTopRated(result.results);
    }
  };

  return (
    <Wrapper>
      <h1 className="py-3">Top Rated Movies</h1>
      <Splide
        options={{
          perPage: 5,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            1600: {
              perPage: 4,
            },
            1200: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {topRated.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <Link to={`movie/detail/${item.id}`}>
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-radius: 1rem;
  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }
`;

export default TopRated;
