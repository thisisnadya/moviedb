import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Searched() {
  const params = useParams();
  const [searched, setSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSearchedList(params.search);
  }, [params.search]);

  const getSearchedList = async (title) => {
    setIsLoading(true);
    try {
      const api = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`
      );
      const data = await api.json();
      setSearched(data.results);
      console.log(data.results);
    } catch (e) {}
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid className="mt-5">
          {searched.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={`/${item.media_type}/detail/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </Link>
              </Card>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 12rem);
  justify-content: center;
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

export default Searched;
