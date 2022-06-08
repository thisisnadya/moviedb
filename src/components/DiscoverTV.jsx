import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function DiscoverTV() {
  const [discover, setDiscover] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const check = localStorage.getItem("discoverTV");

    if (check) {
      setDiscover(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await data.json();
      localStorage.setItem("discoverTV", JSON.stringify(result.results));
      setDiscover(result.results);
      console.log(result.results);
    }
  };

  return (
    <Wrapper>
      <h1 className="py-3">Top Picks TV Series</h1>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            768: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {discover.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <Link to={"/tv/detail/" + item.id}>
                <p>{item.name}</p>
                <img
                  // className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.name}
                />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;
const Card = styled.div`
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  border-radius: 1rem;
  img {
    position: absolute;
    border-radius: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Heebo", sans-serif;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export default DiscoverTV;
