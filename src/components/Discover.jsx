import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Discover() {
  const [discover, setDiscover] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const check = localStorage.getItem("discover");

    if (check) {
      setDiscover(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await data.json();
      localStorage.setItem("discover", JSON.stringify(result.results));
      setDiscover(result.results);
      console.log(result.results);
    }
  };

  return (
    <div className="mt-4">
      <h1 className="py-3">Discover</h1>
      <Splide
        options={{
          perPage: 1,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {discover.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <Link to={"/movie/detail/" + item.id}>
                <div className="overview">
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                </div>
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item.title}
                />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

const Card = styled.div`
  overflow: hidden;
  min-height: 45rem;
  height: 100%;
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
  .overview {
    position: absolute;
    font-family: "Heebo", sans-serif;
    z-index: 10;
    bottom: 0%;
    padding: 1rem 5rem;
    color: white;
    width: 80%;
    font-weight: 500;
    height: 45%;
    h2 {
      font-size: 4rem;
    }
    p {
      font-weight: 300;
      font-size: 1rem;
      opacity: 0.5;
      letter-spacing: 1px;
    }
    @media (max-width: 968px) {
      text-align: center;
      height: 30%;
      width: 100%;
      h2 {
        font-size: 2.5rem;
      }
      p {
        display: none;
      }
    }
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export default Discover;
