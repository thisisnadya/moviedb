import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Genres from "../components/Genres";

function MovieSeries() {
  let params = useParams();
  const [movieSeries, setMovieSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovieSeries(params.type);
  }, [params.type, page]);

  const getMovieSeries = async (type) => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      const result = await data.json();
      setMovieSeries(result.results);
    } catch (err) {}
    setIsLoading(false);
  };

  return (
    <div>
      <Genres />
      <Grid className="mt-5">
        {isLoading ? (
          <Loading />
        ) : (
          movieSeries.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={`/${params.type}/detail/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </Link>
              </Card>
            );
          })
        )}
      </Grid>
      <NextPage onClick={() => setPage(page + 1)}>Show more</NextPage>
    </div>
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

const NextPage = styled.p`
  font-size: 1rem;
  color: white;
  text-align: right;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #797575;
  }
`;

export default MovieSeries;
