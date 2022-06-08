import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieSeries() {
  let params = useParams();
  const [movieSeries, setMovieSeries] = useState([]);

  useEffect(() => {
    getMovieSeries(params.type);
  }, [params.type]);

  const getMovieSeries = async (type) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );
    const result = await data.json();
    setMovieSeries(result.results);
    console.log(result.results);
  };

  return (
    <Grid className="mt-5">
      {movieSeries.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/${params.type}/detail/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default MovieSeries;
