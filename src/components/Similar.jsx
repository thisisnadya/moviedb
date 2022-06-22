import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Similar({ media, id }) {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    getSimilar(media, id);
  }, [media, id]);
  const getSimilar = async (type, id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await data.json();
    setSimilar(result.results);
  };

  return (
    <SimWrapper>
      <h1 className="py-3">Similar Shows</h1>
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
        {similar.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <Link to={`/${media}/detail/${item.id}`}>
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
    </SimWrapper>
  );
}

const SimWrapper = styled.div`
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

export default Similar;
