import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Similar from "../components/Similar";
import styled from "styled-components";
import Loading from "../components/Loading";

function Detail() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [seasonNumber, setSeasonNumber] = useState();
  const [detailSeason, setDetailSeason] = useState({});

  useEffect(() => {
    getDetail(params.media_type, params.id);
  }, [params.id]);

  useEffect(() => {
    getDetailSeason(params.id, seasonNumber);
  }, [seasonNumber]);

  const getDetailSeason = async (id, number) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/season/${number}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setDetailSeason(data);
    console.log(data);
  };

  const getDetail = async (type, id) => {
    setIsLoading(true);
    try {
      const api = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      setDetail(data);
      console.log(data);
    } catch (e) {}
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Wrapper className="mt-5">
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`}
              alt={detail.title}
            />
            <div className="detail">
              {detail.title ? (
                <h2>{`${detail.title} (${detail.release_date.substr(
                  0,
                  4
                )})`}</h2>
              ) : (
                <h2>{detail.original_title}</h2>
              )}
              {detail.name ? (
                <h2>{detail.name}</h2>
              ) : (
                <h2>{detail.original_name}</h2>
              )}
              <h4 className="rate">{detail.vote_average}</h4>
              {detail.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
              <p className="mt-4">{detail.overview}</p>
              {params.media_type === "tv" ? (
                <div>
                  {detail.seasons.map((season) => (
                    <Button
                      className={
                        season.season_number === seasonNumber ? "active" : ""
                      }
                      onClick={() => setSeasonNumber(season.season_number)}
                    >{`Season ${season.season_number}`}</Button>
                  ))}
                  {/* <p>{detail.seasons[seasonNumber - 1].overview}</p> */}
                </div>
              ) : (
                ""
              )}
            </div>
          </Wrapper>
          <Similar media={params.media_type} id={params.id} />
        </div>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;

  img {
    border-radius: 1rem;
  }

  .detail {
    margin-left: 3rem;
    h2 {
      color: white;
      font-size: 4rem;
    }

    h3 {
      font-family: sans-serif;
    }

    h4 {
      color: #b4afaf;
    }
    p {
      font-size: 1.3rem;
      color: #e2dada;
      display: inline-block;
      font-family: "Tajawal", sans-serif;
    }
    span {
      color: white;
      font-size: 1.2rem;
      display: inline-block;
      /* border: 1px solid white; */
      background-color: #470031;
      border-radius: 3rem;
      padding: 0.5rem 1rem;
      margin: 0.7rem 1rem 0.7rem 0rem;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      max-height: initial;
    }
    .detail {
      margin: 1rem 0rem;
      text-align: center;
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  outline: none;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  margin-right: 1rem;
  &.active {
    background-color: white;
    color: black;
    border: 1px solid grey;
  }
`;

export default Detail;
